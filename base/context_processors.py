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
        "Airdrie", "Calgary", "Chestermere", "Okotoks","Cochrane", "Beaumont", "Brooks",  "Camrose", 
        "Cold Lake", "Drayton Valley", "Drumheller", "Edmonton", "Fort McMurray",
        "Grande Prairie", "High River", "Lacombe", "Leduc", "Lethbridge",
        "Lloydminster", "Medicine Hat",  "Red Deer", "Spruce Grove",
        "St. Albert", "Stony Plain", "Strathmore", "Sylvan Lake", "Wetaskiwin"
    }

    # Define priority cities
    priority_cities = ["Airdrie", "Calgary", "Chestermere", "Okotoks", "Cochrane"]

    # Get metadata from the context processor (automatically passed to templates)
    cities = metadata.get("City", [])

    # Filter cities that are only in Alberta
    filtered_cities = [city for city in cities if city["long_value"] in alberta_cities]

    # Sort the filtered cities
    filtered_cities_sorted = sorted(
        filtered_cities,
        key=lambda city: (city["long_value"] not in priority_cities, city["long_value"])
    )
    property_subtypes = metadata.get("PropertySubType", [])
    property_types = metadata.get("PropertyType", [])
    Basement_types = metadata.get("Basement", [])
    ArchitecturalStyle = metadata.get("ArchitecturalStyle", [])
    AssociationAmenities=metadata.get("AssociationAmenities",[])


    price_ranges = [
    {"label": "Under $300,000", "value": "under-300000"},
    {"label": "$300,000 – $500,000", "value": "300000-500000"},
    {"label": "$500,000 – $800,000", "value": "500000-800000"},
    {"label": "$800,000 – $950,000", "value": "800000-950000"},
    {"label": "Over $950,000", "value": "over-950000"}
]
    # print(property_subtypes)
    conDATA = {
            "metadata": metadata, 
            "price_ranges":price_ranges,
            "cities": filtered_cities_sorted, 
            "property_subtypes": property_subtypes,
            "property_types": property_types, 
            "Basement_types": Basement_types,
            "ArchitecturalStyle":ArchitecturalStyle,
            "AssociationAmenities":AssociationAmenities,
            }
    return conDATA
