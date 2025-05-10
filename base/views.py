# rets/views.py
from django.shortcuts import render,redirect
from django.http import JsonResponse
import requests
from requests.auth import HTTPDigestAuth
from bs4 import BeautifulSoup
import os
import json
import re
from .utils.auth import RETS_USERNAME, RETS_PASSWORD
from django.core.paginator import Paginator
from pathlib import Path
from django.conf import settings
from django.core.mail import send_mail
from django.core.mail import EmailMessage
from datetime import datetime, timedelta


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
    # Ensure `MEDIA_ROOT` is used for saving files
    media_root = settings.MEDIA_ROOT if hasattr(settings, "MEDIA_ROOT") else Path(__file__).resolve().parent / "media"
    media_dir = os.path.join(media_root, str(property_id))
    os.makedirs(media_dir, exist_ok=True)  # Ensure directory exists
    
    # Check if images already exist
    existing_images = [
        f"/media/{property_id}/{img}"  # Convert absolute path to URL path
        for img in os.listdir(media_dir) 
        if img.endswith(('jpg', 'jpeg', 'png', 'gif'))
    ]
    
    if existing_images:
        # print(f"📂 Using cached images for Property ID: {property_id}")
        return existing_images  # Return `/media/` URLs

    # print(f"Fetching media for Property ID: {property_id}")
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
    # print(f"Response Content-Type: {content_type}")

    if "text/xml" in content_type:
        # print("Received an XML response instead of images:")
        # print(response.text)
        return []

    boundary_match = re.search(r'boundary="?([^";]+)"?', content_type)
    if not boundary_match:
        # print("Boundary not found. Check response headers:", content_type)
        return []

    boundary = boundary_match.group(1).encode()
    parts = response.content.split(b"--" + boundary)
    
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
                # print("Could not determine content type, skipping.")
                continue

            object_id_match = re.search(r"Object-ID:\s*(\d+)", headers)
            object_id = object_id_match.group(1) if object_id_match else "unknown"

            filename = f"{property_id}_{object_id}.{extension}"
            file_path = os.path.join(media_dir, filename)

            if Path(file_path).is_file():
                # print(f"⚠️ Image already exists: {filename}, skipping download.")
                images.append(f"/media/{property_id}/{filename}")
                continue

            with open(file_path, "wb") as f:
                f.write(image_data.split(b"\r\n--")[0])

            # print(f"✅ Saved image: {filename}")
            images.append(f"/media/{property_id}/{filename}")  # Use `/media/` path

    return images


def get_media_AG(property_id):
    # Ensure `MEDIA_ROOT` is used for saving files
    media_root = settings.MEDIA_ROOT if hasattr(settings, "MEDIA_ROOT") else Path(__file__).resolve().parent / "media"
    media_dir = os.path.join(media_root, str(property_id))
    os.makedirs(media_dir, exist_ok=True)  # Ensure directory exists
    
    # Check if images already exist
    existing_images = [
        f"/media/{property_id}/{img}"  # Convert absolute path to URL path
        for img in os.listdir(media_dir) 
        if img.endswith(('jpg', 'jpeg', 'png', 'gif'))
    ]
    
    if existing_images:
        # print(f"📂 Using cached images for Agent ID: {property_id}")
        return existing_images  # Return `/media/` URLs

    # print(f"Fetching media for Agent ID: {property_id}")
    params = {
        "Resource": "Member",
        "Type": "AgentPhoto",  # Adjust as needed: "Large", "Thumbnail"
        "ID": f"{property_id}:*",
        "Location": 0
    }
    # print
    response = requests.get(
        RETS_GETOBJECT_URL,
        params=params,
        auth=HTTPDigestAuth(USERNAME, PASSWORD),
        headers={"RETS-Version": RETS_VERSION, "User-Agent": USER_AGENT},
        stream=True
    )


# {'SearchType': 'Property', 'Class': 'Property', 'QueryType': 'DMQL2', 'Query': '(ListPrice=|300000-500000)', 'Format': 'COMPACT-DECODED', 'Count': 1, 'StandardNames
# {'SearchType': 'Property', 'Class': 'Property', 'QueryType': 'DMQL2', 'Query': '(ListPrice=300000-500000)', 'Format': 'COMPACT-DECODED', 'Count': 1, 'StandardNames': 0, 'Limit': 9, 'Offset': 0, 'Sort': 'ModificationTimestamp-'}

    content_type = response.headers.get("Content-Type", "")
    # print(f"Response Content-Type: {content_type}")

    if "text/xml" in content_type:
        # print("Received an XML response instead of images:")
        # print(response.text)
        return []

    boundary_match = re.search(r'boundary="?([^";]+)"?', content_type)
    if not boundary_match:
        # print("Boundary not found. Check response headers:", content_type)
        return []

    boundary = boundary_match.group(1).encode()
    parts = response.content.split(b"--" + boundary)
    
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
                # print("Could not determine content type, skipping.")
                continue

            object_id_match = re.search(r"Object-ID:\s*(\d+)", headers)
            object_id = object_id_match.group(1) if object_id_match else "unknown"

            filename = f"{property_id}_{object_id}.{extension}"
            file_path = os.path.join(media_dir, filename)

            if Path(file_path).is_file():
                # print(f"⚠️ Image already exists: {filename}, skipping download.")
                images.append(f"/media/{property_id}/{filename}")
                continue

            with open(file_path, "wb") as f:
                f.write(image_data.split(b"\r\n--")[0])

            # print(f"✅ Saved image: {filename}")
            images.append(f"/media/{property_id}/{filename}")  # Use `/media/` path

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
        # print("Property Data Retrieved Successfully!")
        raw_data = response.text
        soup = BeautifulSoup(raw_data, 'lxml')

        # Extract column names
        columns = soup.find('columns').text.strip().split('\t')

        # Extract data rows
        data_rows = soup.find_all('data')
        for row in data_rows:
            values = row.text.strip().split('\t')
            record = {columns[i]: values[i] if i < len(values) else '' for i in range(len(columns))}
            street_number = record.get("StreetNumber", "").strip()
            street_name = record.get("StreetName", "").strip()
            street_suffix = record.get("StreetSuffix", "").strip()
            street_dir_prefix = record.get("StreetDirPrefix", "").strip()
            street_dir_suffix = record.get("StreetDirSuffix", "").strip()
            unit_number = record.get("UnitNumber", "").strip()
            city = record.get("City", "").strip()
            state = record.get("StateOrProvince", "").strip()
            postal_code = record.get("PostalCode", "").strip()


            days_on_market = int(record.get("DaysOnMarket", 0))
            years = days_on_market // 365
            months = (days_on_market % 365) // 30
            days = (days_on_market % 365) % 30

            if years > 0 and months > 0:
                formatted_days = f"{years} year{'s' if years > 1 else ''}, {months} month{'s' if months > 1 else ''}"
            elif years > 0:
                formatted_days = f"{years} year{'s' if years > 1 else ''}"
            elif months > 0:
                formatted_days = f"{months} month{'s' if months > 1 else ''}"
            else:
                formatted_days = f"{days} days"

            record["FormattedDaysOnMarket"] = formatted_days 
            # Constructing "Name" field (without unit, state, postal code)
            record["Name"] = f"{street_number} {street_name} {street_suffix} {street_dir_suffix}, {city}".strip().replace(" ,", ",")

            # Constructing "FullAddress" field
            full_address_parts = [
                # f"Unit {unit_number}" if unit_number else "",
                f"{street_number} {street_name} {street_suffix} {street_dir_suffix}".strip(),
                city,
                state,
                postal_code
            ]
            record["FullAddress"] = ", ".join(filter(None, full_address_parts))  # Remove empty parts
            AgentID = record.get("ListAgentKeyNumeric", "").strip()
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
        # print(f"Error fetching metadata: {response.status_code}")
        return None

def fetch_properties(seven_days=None, page=1, limit=4,is_getmedia=True, **filters):
    offset = (page - 1) * limit  # Calculate offset for pagination
    query_parts = []

    print(filters.items())
    for key, value in filters.items():
        if value is None:
            continue
        
        if isinstance(value, (list, tuple)):
            query_parts.append(f'({key}=|{"|".join(map(str, value))})')  # Multiple values OR condition
        elif isinstance(value, dict) and "min" in value and "max" in value:
            query_parts.append(f'({key}={value["min"]}-{value["max"]})')  # Range filter
        elif isinstance(value, dict) and "min" in value:
            query_parts.append(f'({key}={value["min"]}+)')  # Greater than min
        elif isinstance(value, dict) and "max" in value:
            query_parts.append(f'({key}={value["max"]}-)')  # Less than max
        else:
            if key in ['ListingId','StreetNumber','StreetName','StreetSuffix','PostalCode']:
                query_parts.append(f'({key}={value})')  # Single value
            else:
                query_parts.append(f'({key}=|{value})')  # Single value
    
    query_string = ','.join(query_parts)
    # print(query_string)
    if not query_string:
        query_string = "(MlsStatus=A)"
    if seven_days:
        query_string+=f",{seven_days}"
    try:
        agent_name = filters.get('ListAgentFullName')  # or just 'AgentFullName'
        if agent_name:
            query_string = f"((ListAgentFullName={agent_name})|(CoListAgentFullName={agent_name})),(MlsStatus=A)"
        else:
            pass
            # query_string += "(MlsStatus=A)"
    except Exception as e:
        print(f"Error building query: {e}")
        # query_string = "(MlsStatus=A)"
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
        "Sort": "ModificationTimestamp-",
    }
    print(search_params)
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
        MlsStatus = record.get("MlsStatus")
        if (MlsStatus):
            if record['MlsStatus'].lower() == 'active':
                record['MlsStatus']='New'
        if listing_id:
            # Extracting address components
            street_number = record.get("StreetNumber", "").strip()
            street_name = record.get("StreetName", "").strip()
            street_suffix = record.get("StreetSuffix", "").strip()
            street_dir_prefix = record.get("StreetDirPrefix", "").strip()
            street_dir_suffix = record.get("StreetDirSuffix", "").strip()
            unit_number = record.get("UnitNumber", "").strip()
            city = record.get("City", "").strip()
            state = record.get("StateOrProvince", "").strip()
            postal_code = record.get("PostalCode", "").strip()

            # Constructing "Name" field (without unit, state, postal code)
            record["Name"] = f"{street_number} {street_name} {street_suffix} {street_dir_suffix}, {city}".strip().replace(" ,", ",")

            # Constructing "FullAddress" field
            full_address_parts = [
                # f"Unit {unit_number}" if unit_number else "",
                f"{street_number} {street_name} {street_suffix} {street_dir_suffix}".strip(),
                city,
                state,
                postal_code
            ]
            record["FullAddress"] = ", ".join(filter(None, full_address_parts))  # Remove empty parts
            AgentID = record.get("ListAgentKeyNumeric", "").strip()
            if is_getmedia:
                record["Media"] = get_media(listing_id)
                record["AgentMedia"] = get_media_AG(AgentID)
            # print(
            #     get_media_AG(AgentID)
            # )
        data_dict.append(record)
    
    return data_dict, total_count

def home(request):

    # print(metaData)
    filters={}
    # if property_type := request.GET.get('propertyType', 'RESI'):
    filters["PropertyType"] = 'RESI'
    filters["City"] = '0046'
    # Get listings updated in the last 7 days
    seven_days_ago = (datetime.utcnow() - timedelta(days=7)).strftime('%Y-%m-%dT%H:%M:%S')

    query = f"(ModificationTimestamp={seven_days_ago}+)"
    # filters['ListingContractDate']='ASE'
    data_dict,total_count = fetch_properties(query,**filters)
    # print(total_count)
    return render(request, 'home.html', {'properties': data_dict})


def advFilter(request):
    if request.method == 'POST':
        # print(request.POST)  # Debugging: Print the raw form data

        filters = {}

        # Capture all non-empty fields dynamically
        for key, value in request.POST.lists():  # Use .lists() to handle multi-select fields
            if key == "csrfmiddlewaretoken":  # Skip CSRF token
                continue

            # Handle multiple selections (checkboxes, multi-selects)
            if len(value) > 1:  
                filters[key] = ",".join(value)  # Convert list to comma-separated values
            elif value[0]:  
                filters[key] = value[0]  # Store single values normally

        query_string = "&".join(f"{key}={value}" for key, value in filters.items())  
        # print(query_string)  # Debugging: Print the generated query string

        return redirect(f"/property?{query_string}")  # Redirect to property view with filters

    return render(request, 'advFilter.html')

# def advFilter(request):
#     filters = {key: value for key, value in request.GET.items() if value}  # Capture all non-empty fields dynamically
#     query_string = "&".join(f"{key}={value}" for key, value in filters.items())  # Convert to URL query string
#     return redirect(f"/property?{query_string}")  # Redirect to the property view with filters
from django.http import JsonResponse


def listing(request,id):

    if request.method=='POST':
        try:
            data = json.loads(request.body)  # Parse JSON request body
            # print("Parsed JSON Data:", data)  # Debugging

            if data.get('FORMTYPE') == 'Schedule Tour':
                email = data.get('Email-Address', '')
                phone = data.get('Phone-Number', '')
                listingname = data.get('property', '')
                meetdate = data.get('Date', '')
                meetTime = data.get('Time', '')
                message = f'Date - {meetdate} \n Time {meetTime} \n Subject - {data.get('FORMTYPE')}'
                send_email(listingname, email, phone, message, None)  # Sending email
                return JsonResponse({"success": True, "message": "Email sent successfully"}, status=200)
            
            if data.get('FORMTYPE') == 'Request Quote':
                email = data.get('Email-Address', '')
                phone = data.get('Phone-Number', '')
                listingname = data.get('property', '')
                meetdate = data.get('Date', '')
                meetTime = data.get('Time', '')
                message = f'Date - {meetdate} \n Time {meetTime} \n Subject - {data.get('FORMTYPE')}'
                send_email(listingname, email, phone, message, None)  # Sending email
                return JsonResponse({"success": True, "message": "Email sent successfully"}, status=200)
        except json.JSONDecodeError:
            # print("Invalid JSON received")
            return JsonResponse({"success": False, "error": "Invalid JSON format"}, status=400)


    listing=get_single(id)
    if id:
        listing[0]["Media"] = get_media(id)
        listing[0]["AgentMedia"] = get_media_AG(listing[0]['ListAgentKeyNumeric'])

    # print(listing)
    return render(request,'listing.html',{'listing':listing})


def activelisting(request):
    page = request.GET.get('page', 1)
    limit = 9  # Number of properties per page
    filters = {}
    for key, value in request.GET.items():
        if key in ["page", "csrfmiddlewaretoken"] or not value.strip():  # Skip empty values
            continue

        # Handle min-max filters dynamically
        if key.startswith("min_") or key.startswith("max_"):
            base_key = key.replace("min_", "").replace("max_", "")  # Extract actual field name

            if base_key not in filters:
                filters[base_key] = {}  # Initialize min-max dictionary

            if key.startswith("min_"):
                filters[base_key]["min"] = value
            else:
                filters[base_key]["max"] = value

        # Handle min-max ranges for specific fields like Price
        elif key.lower() in ["listprice", "living_space"]:
            price_match = re.match(r'\$(\d+)-\$(\d+)', value)
            if price_match:
                filters[key] = {"min": price_match.group(1), "max": price_match.group(2)}
            elif value.startswith("$") and value.endswith("+"):
                filters[key] = {"min": value[1:-1]}  # Extract min value from "$8000+"
            else:
                filters[key] = value

        else:
            filters[key] = value  # Store normal filters

    # Remove duplicate min/max fields (like min_bedroom and max_bedroom)
    min_max_keys = [key for key in filters.keys() if key.startswith("min_") or key.startswith("max_")]
    for key in min_max_keys:
        del filters[key]

    # Default PropertyType if no filters exist
    if not filters:
        filters["PropertyType"] = "RESI"

    # print("aa", filters)  # Debugging output

    try:
        page = int(page)
    except ValueError:
        page = 1

    filters['ListAgentFullName']='Kanwal Bhangu'
    filters['CoListAgentFullName']='Kanwal Bhangu'
    # filters['ListingId']='A2204288'
    # filters['MlsStatus']='Active'
    # Fetch properties using the dynamic filters
    properties, total_count = fetch_properties(page=page, limit=limit, **filters)
    print(properties)
    # Set up pagination
    paginator = Paginator(range(total_count), limit)

    return render(request, "properties.html", {
        "properties": properties,
        "paginator": paginator,
        "current_page": page,
        "total_count": total_count,
    })




import re

def live_search(request):
    search_value = request.GET.get("query", "").strip()
    metadata = load_metadata()
    filters = parse_search_input(search_value, metadata)
    # print(filters)
    properties, total_count = fetch_properties(page=1, limit=9,is_getmedia=False , **filters)
    # print(properties)
    return JsonResponse(properties,safe=False)


def parse_search_input(search_value, metadata):
    filters = {}
    search_value = search_value.strip()
    if not search_value:
        return filters

    # Metadata mapping: city name to code
    cities = metadata.get("City", [])
    city_name_to_code = {city["long_value"].lower(): city["value"] for city in cities}

    # Split comma-separated parts (e.g., "4641 128 Avenue, Calgary, T2P 1J9")
    parts = [p.strip() for p in search_value.split(",") if p.strip()]
    postal_regex = r"^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$"
    mls_regex = r"^[A-Za-z]?\d{5,8}$"  # Accepts A123456 or 123456


    print('parts',parts)
    # Handle single-part input (fallback logic)
    if len(parts) == 1 and not filters:
        term = parts[0]
        if re.match(mls_regex, term, re.IGNORECASE):
            filters["ListingId"] = term.upper()
        elif re.match(postal_regex, term, re.IGNORECASE):
            filters["PostalCode"] = term.upper()
        elif term.lower() in city_name_to_code:
            filters["City"] = city_name_to_code[term.lower()]
        else:
            addr_match = re.match(
                r'(?P<number>\d+)\s+(?P<name>\d+(?:\s+\w+)*|\w+(?:\s+\w+)*)\s+(?P<suffix>Avenue|Street|St|Ave|Boulevard|Blvd|Road|Rd|Drive|Dr|Lane|Ln|Court|Ct|Trail|Trl)\b',
                term,
                re.IGNORECASE,
            )
            print('addd' ,addr_match)

            if not addr_match:
                # Try partial address (just number and name)
                addr_match = re.match(
                    r'(?P<number>\d+)\s+(?P<name>[\w\s]+)',
                    term,
                    re.IGNORECASE,
                )
            print('addd' ,addr_match)
            street_suffixes = [
                "Avenue", "Street", "St", "Ave", "Boulevard", "Blvd", "Road", "Rd",
                "Drive", "Dr", "Lane", "Ln", "Court", "Ct", "Trail", "Trl"
            ]
            if addr_match:
                filters["StreetNumber"] = addr_match.group("number")
                filters["StreetName"] = addr_match.group("name").strip()
                if "suffix" in addr_match.groupdict() and addr_match.group("suffix"):
                    filters["StreetSuffix"] = addr_match.group("suffix").title()
            else:
                if term.isdigit():
                    filters["StreetNumber"] = term
                elif term.lower() in street_suffixes:
                    filters["StreetSuffix"] = term.title()
                elif re.match(postal_regex, term, re.IGNORECASE):
                    filters["PostalCode"] = term.upper()
                elif re.match(mls_regex, term, re.IGNORECASE):
                    filters["ListingId"] = term.upper()
                else:
                    filters["StreetName"] = term.title()
            print(filters)
    else:
        for part in parts:
            lower_part = part.lower()

            # Check for MLS number
            if re.match(mls_regex, part, re.IGNORECASE):
                filters["ListingId"] = part.upper()
                continue

            # Canadian postal code
            if re.match(postal_regex, part, re.IGNORECASE):
                filters["PostalCode"] = part.upper()
                continue

            # City name
            if lower_part in city_name_to_code:
                filters["City"] = city_name_to_code[lower_part]
                continue
            print('filtersfilters',filters)
            # Address matching
            if "StreetNumber" not in filters:
                addr_match = re.match(
                    r'(?P<number>\d+)\s+(?P<name>[\w\s]+?)\s+(?P<suffix>Avenue|Street|St|Ave|Boulevard|Blvd|Road|Rd|Drive|Dr|Lane|Ln|Court|Ct|Trail|Trl)\b',
                    part,
                    re.IGNORECASE,
                )
                if not addr_match:
                    # Try partial address (just number and name)
                    addr_match = re.match(
                        r'(?P<number>\d+)\s+(?P<name>[\w\s]+)',
                        part,
                        re.IGNORECASE,
                    )
                print('HELLOOO ', addr_match)
                if addr_match:
                    filters["StreetNumber"] = addr_match.group("number")
                    filters["StreetName"] = addr_match.group("name").strip()
                    if "suffix" in addr_match.groupdict() and addr_match.group("suffix"):
                        filters["StreetSuffix"] = addr_match.group("suffix").title()
                else:
                    filters["StreetName"] = part

    

    return filters
def property(request):
    page = request.GET.get('page', 1)
    limit = 9  # Number of properties per page

    filters = {}

    for key, value in request.GET.items():
        if key in ["page", "csrfmiddlewaretoken","MLS_or_City"] or not value.strip():  # Skip empty values
            continue
        
            
        
        # Handle min-max filters dynamically
        if key.startswith("min_") or key.startswith("max_"):
            base_key = key.replace("min_", "").replace("max_", "")  # Extract actual field name

            if base_key not in filters:
                filters[base_key] = {}  # Initialize min-max dictionary

            if key.startswith("min_"):
                filters[base_key]["min"] = value
            else:
                filters[base_key]["max"] = value

        # Handle min-max ranges for specific fields like Price
        elif key.lower() in ["listprice", "living_space"]:
            price_match = re.match(r'\$(\d+)-\$(\d+)', value)
            if price_match:
                filters[key] = {"min": price_match.group(1), "max": price_match.group(2)}
            elif value.startswith("$") and value.endswith("+"):
                filters[key] = {"min": value[1:-1]}  # Extract min value from "$8000+"
            else:
                filters[key] = value
                
        
        else:
            filters[key] = value  # Store normal filters
        
        if key == 'ListPrice':
            filters['ListPrice']={}
            if '-' in value:
                if 'under' in value:
                    min_price, max_price = map(str, value.split('-'))
                    filters['ListPrice']['max'] = max_price
                elif 'over' in value:
                    min_price, max_price = map(str, value.split('-'))
                    filters['ListPrice']['min'] = max_price
                else:
                    min_price, max_price = map(int, value.split('-'))
                    filters['ListPrice']['min'] = min_price
                    filters['ListPrice']['max'] = max_price
        # if key=='MLS':
        #     filters['ListingId']=value
        #     del filters['MLS']
    
    search_value = request.GET.get("MLS_or_City", "").strip()

    if search_value:
        filters.update(parse_search_input(search_value,load_metadata()))
    print(filters)
    # Remove duplicate min/max fields (like min_bedroom and max_bedroom)
    min_max_keys = [key for key in filters.keys() if key.startswith("min_") or key.startswith("max_")]
    for key in min_max_keys:
        del filters[key]

    # Default PropertyType if no filters exist
    if not filters:
        filters["PropertyType"] = "RESI"

    # print("aa", filters)  # Debugging output

    try:
        page = int(page)
    except ValueError:
        page = 1

    # filters['ListAgentFullName']='Kanwal Bhangu'
    # filters['ListingId']='207109916'
    # filters['MlsStatus']='Active'
    # Fetch properties using the dynamic filters
    print(filters)
    properties, total_count = fetch_properties(page=page, limit=limit, **filters)
    # print(properties)
    # Set up pagination
    paginator = Paginator(range(total_count), limit)

    return render(request, "properties.html", {
        "properties": properties,
        "paginator": paginator,
        "current_page": page,
        "total_count": total_count,
    })

    # return render(request,'properties.html')
def about(request):
    # metadata_xml = get_metadata()
    # print(metadata_xml)
    return render(request,'about.html')



def send_email(name, email, phone, message, price_range,femail):
    if price_range:
        pq=f'<p><strong>Postal code/Area of Interest:</strong> {price_range}</p>'
    else:
        pq=''

    if name:
        nam=f'<p><strong>Name:</strong> {name}</p>'
    else:
        nam=''
    subject = f"New Contact Form Submission from {name}"
    body = f"""
    <html>
        <body>
            <h2>New Contact Form Submission</h2>
            {nam}
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Phone:</strong> {phone}</p>
            {pq}
            <p><strong>Message:</strong></p>
            <p>{message}</p>
        </body>
    </html>
    """
    from_email =femail  # Replace with your email
    recipient_list = [email]  # Replace with the recipient email

    email_message = EmailMessage(subject, body, from_email, recipient_list)
    email_message.content_subtype = "html"  # Set content type to HTML
    email_message.send()

def contact(request):
    if request.method == 'POST':
        # print(request.POST)
        name = f"{request.POST['First-Name']} {request.POST['Last-Name']}"
        email = request.POST['Email-Address']
        phone = request.POST['Phone-Number']
        message = request.POST['Message']
        price_range = request.POST.get('Postal-code', 'Not specified')  # Avoid KeyError
        
        send_email(name, email, phone, message,price_range,'info@kanwalbhangu.ca')  # Sending email

        return render(request, 'contact.html', {'message': 'Email sent successfully'})
        
    return render(request, 'contact.html')


def sell(request):
    if request.method == 'POST':
        # print(request.POST)
        name = f"{request.POST['First-Name']} {request.POST['Last-Name']}"
        email = request.POST['Email-Address']
        phone = request.POST['Phone-Number']
        message = request.POST['Message']
        
        send_email(name, email, phone, message,None,'sell@kanwalbhangu.ca')  # Sending email

        return render(request, 'sell.html', {'message': 'Email sent successfully'})
        
    return render(request, 'sell.html')

