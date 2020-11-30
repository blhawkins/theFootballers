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
This file uses Flask, PyMongo, and the JSON dumps function to call the webscraping function scrape_sofifa.py, import the scraped data into a local Mongo database, and return the data in the Mongo database as a JSON object. The JSONified data can be seen in the [scraped_data.json](https://github.com/blhawkins/theFootballers/blob/main/Data/scraped_data.json) file.
### [Index.js](https://github.com/blhawkins/theFootballers/blob/main/Static/JS/index.js)
Components of the index.js file include:
1. Code required for the operation of the Slick.js visualization on the website's homepage.
2. Connection with the [index.html](https://github.com/blhawkins/theFootballers/blob/main/Webpages/index.html) file.
<!-- ### [Top_ten.js](//)
Components of the top_ten.js file include:
1. Connection with the [top_ten.html](//) file. -->
### [Players.js](https://github.com/blhawkins/theFootballers/blob/main/Static/JS/players.js)
Components of the players.js file include:
1. Creation of a function that, upon start-up, populates the dropdown menu with all of the available datasets (Player Names). This function also initializes the webpage's graphics with data cooresponding to the first player in the dataset.
2. Creation of a function that produces the following graphics:
    <ul>
    <li>A table that displays pertinent demographic information about the selected player.</li>
    <li>A gauge chart that visualizes the player's Overall Rating from the FIFA 21 video game.</li>
    <li>A gauge chart that visualizes the player's Potential Rating from the FIFA 21 video game.</li>
    <li>A gauge chart that visualizes the player's financial value.</li>
    <li>A gauge chart that visualizes the player's weekly wage.</li>
    </ul>
3. Creation of a function that allows the visualizations to be updated according to the dataset selected through the dropdown menu.
4. Connection with the [players.html](https://github.com/blhawkins/theFootballers/blob/main/Webpages/players.html) file.
### [Countries.js](https://github.com/blhawkins/theFootballers/blob/main/Static/JS/countries.js)
Components of the countries.js file include:
1. Creation and initialization of a MapBox object using Leaflet.js.
2. Use of Javascript operations to import and read a GeoJson file containing the location of the capital city in each country.
3. Use of Leaflet.js functionality to create a marker located on the capital city of each country that contains a player in the players data dataset (300 Most Valuable Players in the World).
4. Continued use of Leaflet.js to create and attach a pop-up object to each country marker containing the name and club team of each player from the country present in the dataset.
5. Connection with the [countries.html](https://github.com/blhawkins/theFootballers/blob/main/Webpages/countries.html) file.
### [Data.js](https://github.com/blhawkins/theFootballers/blob/main/Static/JS/data.js)
Components of the data.js file include:
1. Creation of a function that uses D3.js to select an HTML table tag and append a row and insert the values cooresponding to a data entry.
2. Creation of a function that imports the dataset containing the player data and calls the previous function for each entry (player) in the dataset.
3. Creation of six seperate functions that filter the original data table by the following constraints: name, age, overall rating, potential rating and country.
4. Use of D3.js to trigger data filtering upon user interactions with the cooresponding button.
5. Connection with the [data.html](https://github.com/blhawkins/theFootballers/blob/main/Webpages/data.html) file.

# Screen Captures

### [Index Page](https://blhawkins.github.io/theFootballers/Webpages/index.html)
![alt text](https://github.com/blhawkins/theFootballers/blob/main/Static/Images/Screenshots/index_screenshot_1.png 'Screenshot of Index Page')

<!-- ### [Top Ten Page](https://blhawkins.github.io/theFootballers/Webpages/top_ten.html)
![alt text](// 'Screenshot of Top Ten Page') -->

### [Players Page](https://blhawkins.github.io/theFootballers/Webpages/players.html)
![alt text](https://github.com/blhawkins/theFootballers/blob/main/Static/Images/Screenshots/players_screenshot_1.png 'Screenshot 1 of Players Page (Top of Page)')
![alt text](https://github.com/blhawkins/theFootballers/blob/main/Static/Images/Screenshots/players_screenshot_2.png 'Screenshot 2 of Players Page (Bottom of Page)')

### [Countries Page](https://blhawkins.github.io/theFootballers/Webpages/countries.html)
![alt text](https://github.com/blhawkins/theFootballers/blob/main/Static/Images/Screenshots/countries_screenshot_1.png 'Screenshot of Countries Page')

### [Data Page](https://blhawkins.github.io/theFootballers/Webpages/data.html)
![alt text](https://github.com/blhawkins/theFootballers/blob/main/Static/Images/Screenshots/data_screenshot_1.png 'Screenshot 1 of Data Page (Top of Page)')
![alt text](https://github.com/blhawkins/theFootballers/blob/main/Static/Images/Screenshots/data_screenshot_2.png 'Screenshot 2 of Data Page (Bottom of Page)')