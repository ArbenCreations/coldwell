# rets/views.py
from django.shortcuts import render
from django.http import JsonResponse
import requests
from requests.auth import HTTPDigestAuth
from bs4 import BeautifulSoup
import os
import json
import re
from .utils.auth import RETS_USERNAME, RETS_PASSWORD
from django.core.paginator import Paginator


# RETS Credentials
RETS_LOGIN_URL = "https://matrixrets.pillarnine.com/rets/Login.ashx"
RETS_SEARCH_URL = "https://matrixrets.pillarnine.com/rets/Search.ashx"
RETS_GETOBJECT_URL = "https://matrixrets.pillarnine.com/rets/GetObject.ashx"
RETS_METADATA_URL = "https://matrixrets.pillarnine.com/rets/GetMetadata.ashx"


USERNAME = RETS_USERNAME
PASSWORD = RETS_PASSWORD
RETS_VERSION = "RETS/1.7.2"
USER_AGENT = "MyRETSClient/1.0"



def get_media(property_id):
    print(f"Fetching media for Property ID: {property_id}")

    params = {
        "Resource": "Property",
        "Type": "XLarge",  # Adjust as needed: "Large", "Thumbnail"
        "ID": f"{property_id}:*",
        "Location": 0
    }

    response = requests.get(
        RETS_GETOBJECT_URL,
        params=params,
        auth=HTTPDigestAuth(USERNAME, PASSWORD),
        headers={"RETS-Version": RETS_VERSION, "User-Agent": USER_AGENT},
        stream=True
    )

    content_type = response.headers.get("Content-Type", "")

    # Debug: Print content type
    print(f"Response Content-Type: {content_type}")

    # Check for XML error response
    if "text/xml" in content_type:
        print("Received an XML response instead of images:")
        print(response.text)
        return []

    # Extract boundary from Content-Type
    boundary_match = re.search(r'boundary="?([^";]+)"?', content_type)
    if not boundary_match:
        print("Boundary not found. Check response headers:", content_type)
        return []

    boundary = boundary_match.group(1).encode()
    parts = response.content.split(b"--" + boundary)

    images = []  # Store saved image paths
    media_dir = f"media/{property_id}"
    os.makedirs(media_dir, exist_ok=True)  # Ensure directory exists

    for part in parts:
        if b"Content-Type:" in part:
            headers, image_data = part.split(b"\r\n\r\n", 1)
            headers = headers.decode(errors="ignore")

            # Extract Content-Type
            content_type_match = re.search(r"Content-Type:\s*(image/\w+)", headers)
            if content_type_match:
                content_type = content_type_match.group(1)
                extension = content_type.split("/")[-1]
            else:
                print("Could not determine content type, skipping.")
                continue  # Skip non-image parts

            # Extract Object-ID
            object_id_match = re.search(r"Object-ID:\s*(\d+)", headers)
            object_id = object_id_match.group(1) if object_id_match else "unknown"

            # Define file path
            filename = f"{property_id}_{object_id}.{extension}"
            file_path = os.path.join(media_dir, filename)

            # **Check if the image already exists**
            if os.path.exists(file_path):
                print(f"⚠️ Image already exists: {filename}, skipping download.")
                images.append(file_path)
                continue  # Skip downloading

            # Save the image
            with open(file_path, "wb") as f:
                f.write(image_data.split(b"\r\n--")[0])

            print(f"✅ Saved image: {filename}")
            images.append(file_path)

        else:
            print("Skipping non-image part.")

    return images  # Return list of image paths

def get_single(listing_id):
    # Search query to fetch property details by Listing ID
    search_params = {
        "SearchType": "Property",  # The resource type
        "Class": "Property",  # The specific class (e.g., Residential, Commercial)
        "QueryType": "DMQL2",  # Data query language format
        "Query": f"(ListingKeyNumeric={listing_id})",  # Query filter
        "Format": "COMPACT-DECODED",  # Response format
        "Count": 1,  # Include record count
        "StandardNames": 0,  # Use system names instead of standard names
        "Limit": 1  # Fetch only this listing
    }

    # Perform the RETS search request
    response = requests.get(
        RETS_SEARCH_URL,
        params=search_params,
        auth=HTTPDigestAuth(USERNAME, PASSWORD),
        headers={"RETS-Version": RETS_VERSION, "User-Agent": USER_AGENT},
    )

    data_dict = []

    if response.status_code == 200:
        print("Property Data Retrieved Successfully!")
        raw_data = response.text
        soup = BeautifulSoup(raw_data, 'lxml')

        # Extract column names
        columns = soup.find('columns').text.strip().split('\t')

        # Extract data rows
        data_rows = soup.find_all('data')
        for row in data_rows:
            values = row.text.strip().split('\t')
            record = {columns[i]: values[i] if i < len(values) else '' for i in range(len(columns))}
            data_dict.append(record)

        # Convert to JSON and print
        return data_dict
    else:
        print("Error:", response.status_code, response.text)


def parse_metadata(xml_data):
    """Parse XML response and extract lookup values."""
    soup = BeautifulSoup(xml_data, "xml")
    lookup_dict = {}

    for lookup in soup.find_all("METADATA-LOOKUP_TYPE"):
        lookup_name = lookup.get("Lookup", "").strip()  # Extract Lookup name
        lookup_values = []

        for entry in lookup.find_all("LookupType"):
            value = entry.find("Value").text if entry.find("Value") else None
            long_value = entry.find("LongValue").text if entry.find("LongValue") else value  # Default to value if missing
            lookup_values.append({"value": value, "long_value": long_value})

        lookup_dict[lookup_name] = lookup_values

    return lookup_dict



def get_metadata(resource="Property"):
    """Fetch metadata from RETS MLS to get available filters."""
    params = {
        "Type": "METADATA-LOOKUP_TYPE",
        "ID": resource,
        "Format": "STANDARD-XML"
    }

    response = requests.get(
        RETS_METADATA_URL,
        params=params,
        auth=HTTPDigestAuth(USERNAME, PASSWORD),
        headers={"RETS-Version": RETS_VERSION, "User-Agent": USER_AGENT}
    )

    if response.status_code == 200:
        fdata=parse_metadata(response.text)
        open('metadata.json', 'w').write(json.dumps(fdata))
       
        return fdata  # XML Response (Parse it for filters)
    else:
        print(f"Error fetching metadata: {response.status_code}")
        return None


def fetch_properties(page=1, limit=4):
    offset = (page - 1) * limit  # Calculate offset for pagination
    search_params = {
        "SearchType": "Property",
        "Class": "Property",
        "QueryType": "DMQL2",
        "Query": "(PropertyType=|RESI)",
        "Format": "COMPACT-DECODED",
        "Count": 1,
        "StandardNames": 0,
        "Limit": limit,
        "Offset": offset,
    }
    
    response = requests.get(
        RETS_SEARCH_URL,
        params=search_params,
        auth=HTTPDigestAuth(USERNAME, PASSWORD),
        headers={"RETS-Version": RETS_VERSION, "User-Agent": USER_AGENT},
    )
    
    if response.status_code != 200:
        return JsonResponse({"error": "Failed to fetch data"}, status=500)
    
    soup = BeautifulSoup(response.text, 'lxml')
    count_tag = soup.find('count')
    total_count = int(count_tag['records']) if count_tag and 'records' in count_tag.attrs else 0
    columns = soup.find('columns').text.strip().split('\t')
    data_rows = soup.find_all('data')
    data_dict = []
    
    for row in data_rows:
        values = row.text.strip().split('\t')
        record = {columns[i]: values[i] if i < len(values) else '' for i in range(len(columns))}
        listing_id = record.get("ListingKeyNumeric")
        if listing_id:
            record["Media"] = get_media(listing_id)
        data_dict.append(record)
    return data_dict ,total_count  

def home(request):
    data_dict,total_count = fetch_properties()
    print(total_count)
    return render(request, 'home.html', {'properties': data_dict})

def listing(request,id):
    listing=get_single(id)
    if id:
        listing[0]["Media"] = get_media(id)
    print(listing)
    return render(request,'listing.html',{'listing':listing})
def property(request):
    page = request.GET.get('page', 1)  # Get page number from URL
    limit = 9  # Number of properties per page

    try:
        page = int(page)
    except ValueError:
        page = 1

    properties, total_count = fetch_properties(page=page, limit=limit)  # Fetch data and count

    paginator = Paginator(range(total_count), limit)  # Create paginator using actual count
    # print(properties)
    return render(request, 'properties.html', {
        'properties': properties,
        'paginator': paginator,
        'current_page': page,
        'total_count': total_count,
    })

    # return render(request,'properties.html')
def about(request):
    metadata_xml = get_metadata()
    print(metadata_xml)
    return render(request,'about.html')
def contact(request):
    return render(request,'contact.html')