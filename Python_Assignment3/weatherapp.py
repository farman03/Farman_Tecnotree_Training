
import urllib.request
import json

# Base URL for the OpenWeatherMap API
base_url = "https://api.openweathermap.org/data/2.5/weather?"

# API key for the OpenWeatherMap API
api_key = "e724257c2919cc81cc25891b7aafc8b7"

# Ask the user to enter a city name
city_name = input("Enter city name: ")

# Create the complete URL for the API request
complete_url = base_url + "appid=" + api_key + "&q=" + city_name

# Send the API request and store the response in a variable
response = urllib.request.urlopen(complete_url)

# Parse the JSON response into a Python dictionary
weather_data = json.loads(response.read())

# Check if the API request was successful
if weather_data["cod"] != "404":
    # Extract the relevant information from the response dictionary
    temperature = weather_data["main"]["temp"]
    pressure = weather_data["main"]["pressure"]
    humidity = weather_data["main"]["humidity"]
    description = weather_data["weather"][0]["description"]
    
    # Convert temperature from Kelvin to Celsius and Fahrenheit
    temp_celsius = temperature - 273.15
    temp_fahrenheit = (temperature - 273.15) * 9/5 + 32
    
    # Display the weather information to the user
    print("Temperature (Celsius):", temp_celsius)
    print("Temperature (Fahrenheit):", temp_fahrenheit)
    print("Pressure:", pressure)
    print("Humidity:", humidity)
    print("Description:", description)
else:
    # If the API request was not successful, display an error message
    print("City not found. Please try again.")
