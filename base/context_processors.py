import json
import os
from django.conf import settings

def metadata_context(request):
    """
    Context processor to make metadata globally available in templates.
    """
    metadata_path = os.path.join(settings.BASE_DIR, "static/metadata.json")
    # print(metadata_path)
    metadata = {}
    try:
        with open(metadata_path, "r", encoding="utf-8") as file:
            metadata = json.load(file)
            # print(metadata)
    except (FileNotFoundError, json.JSONDecodeError):
        metadata = {}
    alberta_cities = {
        "Airdrie", "Beaumont", "Brooks", "Calgary", "Camrose", "Chestermere",
        "Cold Lake", "Drayton Valley", "Drumheller", "Edmonton", "Fort McMurray",
        "Grande Prairie", "High River", "Lacombe", "Leduc", "Lethbridge",
        "Lloydminster", "Medicine Hat", "Okotoks", "Red Deer", "Spruce Grove",
        "St. Albert", "Stony Plain", "Strathmore", "Sylvan Lake", "Wetaskiwin"
    }

    # Get metadata from the context processor (automatically passed to templates)
    cities = metadata.get("City", [])
    # print(cities)
    # Filter cities that are only in Alberta
    filtered_cities = [city for city in cities if city["long_value"] in alberta_cities]
    property_subtypes = metadata.get("PropertySubType", [])
    property_types = metadata.get("PropertyType", [])
    # print(property_subtypes)
    return {"metadata": metadata,"cities":filtered_cities,"property_subtypes":property_subtypes,"property_types":property_types}
