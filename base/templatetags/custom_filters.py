from django import template
from datetime import datetime
from django.utils.timezone import make_aware
import pytz  # Required for timezone conversion
from django.utils.timezone import now
register = template.Library()  # REQUIRED for Django to recognize this file

@register.filter
def format_iso8601(value, timezone="America/Denver"):
    """Convert an ISO 8601 timestamp string to a formatted date/time."""
    try:
        # Remove milliseconds if present (2024-11-17T23:15:04.430 -> 2024-11-17T23:15:04)
        if "." in value:
            value = value.split(".")[0]

        # Convert string to datetime object
        dt = datetime.strptime(value, "%Y-%m-%dT%H:%M:%S")

        # Make timezone-aware
        dt = make_aware(dt, pytz.timezone("UTC"))  # Assuming stored timestamps are in UTC

        # Convert to desired timezone
        dt = dt.astimezone(pytz.timezone(timezone))

        # Format the date/time
        return dt.strftime("%B %d, %Y at %I:%M %p %Z")  # Example: November 17, 2024 at 11:15 PM MDT

    except Exception as e:
        return value  # Return the original value if there's an error

@register.simple_tag
def current_datetime(timezone="America/Denver"):

    try:
        dt = now().astimezone(pytz.timezone(timezone))
        return dt.strftime("%B %d, %Y at %I:%M %p %Z")
    except Exception:
        return ""