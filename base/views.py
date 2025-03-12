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

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
METADATA_FILE = os.path.join(BASE_DIR, "static", "metadata.json")

# print(metaData)

def load_metadata():
    """Reads the metadata.json file and returns its content as a dictionary."""
    try:
        with open(METADATA_FILE, "r", encoding="utf-8") as file:
            data = json.load(file)
            return data
    except FileNotFoundError:
        return {"error": "Metadata file not found"}
    except json.JSONDecodeError:
        return {"error": "Error decoding JSON file"}

# # Example view to return metadata as JSON response
# def metadata_view(request):
#     metadata = load_metadata()
#     return JsonResponse(metadata)


# RETS Credentials
RETS_LOGIN_URL = "https://matrixrets.pillarnine.com/rets/Login.ashx"
RETS_SEARCH_URL = "https://matrixrets.pillarnine.com/rets/Search.ashx"
RETS_GETOBJECT_URL = "https://matrixrets.pillarnine.com/rets/GetObject.ashx"
RETS_METADATA_URL = "https://matrixrets.pillarnine.com/rets/GetMetadata.ashx"


USERNAME = RETS_USERNAME
PASSWORD = RETS_PASSWORD
RETS_VERSION = "RETS/1.7.2"
USER_AGENT = "MyRETSClient/1.0"



# def get_media(property_id):
#     print(f"Fetching media for Property ID: {property_id}")

#     params = {
#         "Resource": "Property",
#         "Type": "XLarge",  # Adjust as needed: "Large", "Thumbnail"
#         "ID": f"{property_id}:*",
#         "Location": 0
#     }

#     response = requests.get(
#         RETS_GETOBJECT_URL,
#         params=params,
#         auth=HTTPDigestAuth(USERNAME, PASSWORD),
#         headers={"RETS-Version": RETS_VERSION, "User-Agent": USER_AGENT},
#         stream=True
#     )

#     content_type = response.headers.get("Content-Type", "")

#     # Debug: Print content type
#     print(f"Response Content-Type: {content_type}")

#     # Check for XML error response
#     if "text/xml" in content_type:
#         print("Received an XML response instead of images:")
#         print(response.text)
#         return []

#     # Extract boundary from Content-Type
#     boundary_match = re.search(r'boundary="?([^";]+)"?', content_type)
#     if not boundary_match:
#         print("Boundary not found. Check response headers:", content_type)
#         return []

#     boundary = boundary_match.group(1).encode()
#     parts = response.content.split(b"--" + boundary)

#     images = []  # Store saved image paths
#     media_dir = f"media/{property_id}"
#     os.makedirs(media_dir, exist_ok=True)  # Ensure directory exists

#     for part in parts:
#         if b"Content-Type:" in part:
#             headers, image_data = part.split(b"\r\n\r\n", 1)
#             headers = headers.decode(errors="ignore")

#             # Extract Content-Type
#             content_type_match = re.search(r"Content-Type:\s*(image/\w+)", headers)
#             if content_type_match:
#                 content_type = content_type_match.group(1)
#                 extension = content_type.split("/")[-1]
#             else:
#                 print("Could not determine content type, skipping.")
#                 continue  # Skip non-image parts

#             # Extract Object-ID
#             object_id_match = re.search(r"Object-ID:\s*(\d+)", headers)
#             object_id = object_id_match.group(1) if object_id_match else "unknown"

#             # Define file path
#             filename = f"{property_id}_{object_id}.{extension}"
#             file_path = os.path.join(media_dir, filename)

#             # **Check if the image already exists**
#             if os.path.exists(file_path):
#                 print(f"⚠️ Image already exists: {filename}, skipping download.")
#                 images.append(file_path)
#                 continue  # Skip downloading

#             # Save the image
#             with open(file_path, "wb") as f:
#                 f.write(image_data.split(b"\r\n--")[0])

#             print(f"✅ Saved image: {filename}")
#             images.append(file_path)

#         else:
#             print("Skipping non-image part.")

#     return images  # Return list of image paths

def get_media(property_id):
    media_dir = f"media/{property_id}"
    
    # If the directory exists, return the list of existing images
    if os.path.exists(media_dir):
        images = [os.path.join(media_dir, img).replace("\\", "/") for img in os.listdir(media_dir) if img.endswith(('jpg', 'jpeg', 'png', 'gif'))]
        print(f"📂 Using cached images for Property ID: {property_id}")
        return images
    
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
    print(f"Response Content-Type: {content_type}")

    if "text/xml" in content_type:
        print("Received an XML response instead of images:")
        print(response.text)
        return []

    boundary_match = re.search(r'boundary="?([^";]+)"?', content_type)
    if not boundary_match:
        print("Boundary not found. Check response headers:", content_type)
        return []

    boundary = boundary_match.group(1).encode()
    parts = response.content.split(b"--" + boundary)
    os.makedirs(media_dir, exist_ok=True)  # Ensure directory exists
    
    images = []
    for part in parts:
        if b"Content-Type:" in part:
            headers, image_data = part.split(b"\r\n\r\n", 1)
            headers = headers.decode(errors="ignore")

            content_type_match = re.search(r"Content-Type:\s*(image/\w+)", headers)
            if content_type_match:
                content_type = content_type_match.group(1)
                extension = content_type.split("/")[-1]
            else:
                print("Could not determine content type, skipping.")
                continue

            object_id_match = re.search(r"Object-ID:\s*(\d+)", headers)
            object_id = object_id_match.group(1) if object_id_match else "unknown"

            filename = f"{property_id}_{object_id}.{extension}"
            file_path = os.path.join(media_dir, filename)

            if os.path.exists(file_path):
                print(f"⚠️ Image already exists: {filename}, skipping download.")
                images.append(file_path)
                continue

            with open(file_path, "wb") as f:
                f.write(image_data.split(b"\r\n--")[0])

            print(f"✅ Saved image: {filename}")
            images.append(file_path)

    return images


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

def fetch_properties(page=1, limit=4, location=None, min_price=None, max_price=0, property_type=None,property_Subtype=None):
    
    offset = (page - 1) * limit  # Calculate offset for pagination
    query_parts = []
    
    if location:
        query_parts.append(f"(City=|{location})")
    # Fix price range query
    if min_price and max_price:
        query_parts.append(f"(ListPrice={min_price}-{max_price})")  # Use correct RETS range syntax
    elif min_price:
        query_parts.append(f"(ListPrice={min_price}+)")  # Greater than min price
    elif max_price:
        query_parts.append(f"(ListPrice=-{max_price})")  # Less than max price

    # Fix property type query
    if property_type:
            query_parts.append(f'(PropertyType=|{property_type})')

    if property_Subtype:
            query_parts.append(f'(PropertySubType=|{property_Subtype})')
    
    query_string = ','.join(query_parts)
    print(query_string)
    search_params = {
        "SearchType": "Property",
        "Class": "Property",
        "QueryType": "DMQL2",
        "Query": query_string,
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
    # print(soup)
    rets_tag = soup.find('rets')
    if rets_tag and "No Records Found" in rets_tag.get("replytext", ""):
        return [], 0  # Return empty list and count 0

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
    
    return data_dict, total_count

def home(request):

    # print(metaData)
    
    data_dict,total_count = fetch_properties(property_type='RESI')
    print(total_count)
    return render(request, 'home.html', {'properties': data_dict})

def listing(request,id):
    listing=get_single(id)
    if id:
        listing[0]["Media"] = get_media(id)
    # print(listing)
    return render(request,'listing.html',{'listing':listing})

def property(request):
    page = request.GET.get('page', 1)  # Get page number from URL
    limit = 9  # Number of properties per page
    location = request.GET.get('location')
    price_range = request.GET.get('Price')
    property_type = request.GET.get('propertyType')
    property_Subtype=request.GET.get('property_Subtype')
    min_price, max_price = None, None
    if price_range:
        price_match = re.match(r'\$(\d+)-\$(\d+)', price_range)
        if price_match:
            min_price, max_price = price_match.groups()
        elif price_range == "$8000+":
            min_price = "8000"
    
    try:
        page = int(page)
    except ValueError:
        page = 1
    
    properties, total_count = fetch_properties(page=page, limit=limit, location=location, min_price=min_price, max_price=max_price, property_type=property_type,property_Subtype=property_Subtype)  # Fetch data and count
    
    paginator = Paginator(range(total_count), limit)  # Create paginator using actual count
    
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