# theFootballers
### Analysis of the Most Valuable Football Players in the World ⚽️🌍
University of Kansas Data Analytics Bootcamp Project 2

# Main Contents:
    fifa_scraping.ipynb
    scrape_sofifa.py
    app.py
    scraped_data.json
    index.js/.html
    top_ten.js/.html
    players.js/.html
    countries.js/.html
    data.js/.html

# Tools Used:
    Beautiful Soup
    Splinter
    Python
    Jupyter Notebook
    PyMongo
    Flask
    Javascript
    D3.js
    Plotly.js
    Leaflet.js
    Slick.js
    HTML
    CSS

# Project Description

### [FIFA_Scraping.ipynb](https://github.com/blhawkins/theFootballers/blob/main/Data%20Scraping/fifa_scraping.ipynb) and [Scrape_SoFIFA.py](https://github.com/blhawkins/theFootballers/blob/main/Data%20Scraping/scrape_sofifa.py)
These files utilize Splinter and Beautiful Soup in order to scrape information from the [SoFIFA](https://sofifa.com/) soccer database. More specifically, information about the top 300 most valuable players, and the top 300 most highly rated club teams is stored. The Jupyter file shows the resulting dataset, and the Python file is used as a scraping function that is incorporated into the Flask application and PyMongo connection.

### [App.py](https://github.com/blhawkins/theFootballers/blob/main/Data%20Scraping/app.py)
Data in [scraped_data.json](https://github.com/blhawkins/theFootballers/blob/main/Data/scraped_data.json)
### [Index.js](https://github.com/blhawkins/theFootballers/blob/main/Static/JS/index.js)
Components of the index.js file include:
1. Code required for the operation of the Slick.js visualization on the website's homepage.
2. Connection with the [index.html](https://github.com/blhawkins/theFootballers/blob/main/Webpages/index.html) file.

### [Top_ten.js](//)
Components of the top_ten.js file include:
1. Creation of a map object with a selection of three base map styles: a street map, a dark map, and a satellite map.
2. Use of D3.json to perform an API call for earthquakes with magnitudes greater than 2.5 that occured in the previous 30 days.
3. Use of Leaflet.js functionality to create a circle marker and cooresponding tooltip for each earthquake present in the dataset.
    <ul>
    <li>The radius of each circle marker is proportional to the magnitude of the cooresponding earthquake.</li>
    <li>The color of each circle marker is representative of the depth at which the cooresponding earthquake originated. A legend was created to show the significance of the colors.</li>
    </ul>
4. Use of D3.json to import in a GeoJSON file containing the shape of the Earth's tectonic plates.
5. Use of Leaflet.js functionality to create a layer control panel whereby users can select one of the three base maps as well as toggle both the earthquake marker layer and the tectonic plate layer.
6. Connection with the [top_ten.html](//) file.
### [Players.js](https://github.com/blhawkins/theFootballers/blob/main/Static/JS/players.js)
Components of the players.js file include:
1. Creation of a function that, upon start-up, populates the dropdown menu with all of the available datasets (Patient IDs). This function also uses a random number generator to initialize the webpage's graphics using data cooresponding to a random patient.
2. Creation of a function that produces the following graphics:
    <ul>
    <li>A bar chart that displays the names and relative frequencies of the top ten OTUs (operational taxonomic units) found on the selected patient's belly button.</li>
    <li>A bubble chart that displays the diversity and the relative frequencies of the OTUs found on the selected patient.</li>
    <li>A table that displays pertinent demographic information about the selected patient.</li>
    <li>A gauge chart that visualizes the frequency with which the selected patient washes their belly button.</li>
    </ul>
3. Creation of a function that allows the visualizations to be updated according to the dataset selected through the dropdown menu.
4. Connection with the [players.html](https://github.com/blhawkins/theFootballers/blob/main/Webpages/players.html) file.
### [Countries.js](https://github.com/blhawkins/theFootballers/blob/main/Static/JS/countries.js)
Components of the countries.js file include:
1. Creation of a map object with a selection of three base map styles: a street map, a dark map, and a satellite map.
2. Use of D3.json to perform an API call for earthquakes with magnitudes greater than 2.5 that occured in the previous 30 days.
3. Use of Leaflet.js functionality to create a circle marker and cooresponding tooltip for each earthquake present in the dataset.
    <ul>
    <li>The radius of each circle marker is proportional to the magnitude of the cooresponding earthquake.</li>
    <li>The color of each circle marker is representative of the depth at which the cooresponding earthquake originated. A legend was created to show the significance of the colors.</li>
    </ul>
4. Use of D3.json to import in a GeoJSON file containing the shape of the Earth's tectonic plates.
5. Use of Leaflet.js functionality to create a layer control panel whereby users can select one of the three base maps as well as toggle both the earthquake marker layer and the tectonic plate layer.
6. Connection with the [countries.html](https://github.com/blhawkins/theFootballers/blob/main/Webpages/countries.html) file.
### [Data.js](https://github.com/blhawkins/theFootballers/blob/main/Static/JS/data.js)
Components of the data.js file include:
1. Creation of a Javascript function that embedds a list of dictionaries into an HTML table tag selected by D3.js.
2. Creation of a Javascript function that tests whether a date passed into the filter form is present in the dataset.
3. Creation of a Javascript function that filters the original UFO sighting data by the date constraint inputted by the user and returns the relevant UFO sighting data.
4. Creation of a Javascript function that resets the data displayed in the table to display the unfiltered dataset.
5. Use of D3.js to trigger data filtering and table resetting upon user interactions with the cooresponding buttons and forms.
6. Connection with the [data.html](https://github.com/blhawkins/theFootballers/blob/main/Webpages/data.html) file.

# Screen Captures

### [Index Page](https://blhawkins.github.io/theFootballers/Webpages/index.html)
![alt text](https://github.com/blhawkins/theFootballers/blob/main/Static/Images/Screenshots/index_screenshot_1.png 'Screenshot of Index Page')

### [Top Ten Page](https://blhawkins.github.io/theFootballers/Webpages/top_ten.html)
![alt text](// 'Screenshot of Top Ten Page')

### [Players Page](https://blhawkins.github.io/theFootballers/Webpages/players.html)
![alt text](https://github.com/blhawkins/theFootballers/blob/main/Static/Images/Screenshots/players_screenshot_1.png 'Screenshot 1 of Players Page (Top of Page)')
![alt text](https://github.com/blhawkins/theFootballers/blob/main/Static/Images/Screenshots/players_screenshot_2.png 'Screenshot 2 of Players Page (Bottom of Page)')

### [Countries Page](https://blhawkins.github.io/theFootballers/Webpages/countries.html)
![alt text](https://github.com/blhawkins/theFootballers/blob/main/Static/Images/Screenshots/countries_screenshot_1.png 'Screenshot of Countries Page')

### [Data Page](https://blhawkins.github.io/theFootballers/Webpages/data.html)
![alt text](https://github.com/blhawkins/theFootballers/blob/main/Static/Images/Screenshots/data_screenshot_1.png 'Screenshot 1 of Data Page (Top of Page)')
![alt text](https://github.com/blhawkins/theFootballers/blob/main/Static/Images/Screenshots/data_screenshot_2.png 'Screenshot 2 of Data Page (Bottom of Page)')