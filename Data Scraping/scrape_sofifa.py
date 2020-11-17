#Import dependencies
from splinter import Browser
from bs4 import BeautifulSoup as bs

#Define the path to the chrome driver
def init_browser():
    executable_path = {"executable_path": "/usr/local/bin/chromedriver"}
    return Browser("chrome", **executable_path, headless=True)

#Define a function that scrapes the SoFIFA website
def scrape():

    #Define a dictionary called scraped_data that will be returned by the function
    scraped_data = {}

    #Define a player_data_list and team_data_list for holding the results of the webscraping
    player_data_list = []
    team_data_list = []

    #Open a browser window
    browser = init_browser()

    #----------Player Data Scraping----------#

    #Feed the base players url
    base_players_url = "https://sofifa.com/?col=vl&sort=desc"

    #Perform this scrape 5 pages deep
    for x in range (1,6):

        #Define the current url source
        current_players_url = base_players_url + '&offset=' + f'{(x-1)*60}'
        browser.visit(current_players_url)

        #Obtain the HTML and parse it into a BeautifulSoup object
        player_html = browser.html
        player_soup = bs(player_html, "html.parser")

        #Find the main content section of the page
        players_main_table = player_soup.find('tbody', class_ = 'list')

        #Select the rows (players) of the main content table
        players = players_main_table.find_all('tr')

        #Save the following information for each player
        for player in players:

            #Make a dictionary to temporarily store each player's data
            player_data = {}

            #Player name
            player_data['name'] = player.find('td', class_ = 'col-name').find('a')['data-tooltip']

            #Player primary position
            player_data['primary_position'] = player.find('span', class_ = 'pos').get_text()

            #Player age
            player_data['age'] = player.find('td', class_ = 'col-ae').get_text()

            #Player overall FIFA rating
            player_data['overall_rating'] = player.find('td', class_ = 'col-oa').find('span').get_text()

            #Player potential FIFA rating
            player_data['potential_rating'] = player.find('td', class_ = 'col-pt').find('span').get_text()

            #Player national team
            player_data['national_team'] = player.find('div', class_ = 'bp3-text-overflow-ellipsis').find('img')['title']

            #Player value
            player_data['value_in_millions_of_euros'] = player.find('td', class_ = 'col-vl').get_text().split('€')[1].split('M')[0]

            #Player wage
            player_data['wage_in_thousands_of_euros_per_week'] = player.find('td', class_ = 'col-wg').get_text().split('€')[1].split('K')[0]

            #Player club team
            name_columns = player.find_all('td', class_ = 'col-name')
            player_data['club_team'] = name_columns[1].find('a').get_text()

            #Player image
            player_data['image'] = player.find('td', class_ = 'col-avatar').find('img')['data-src']

            #Player url extension
            player_data['url_extension'] = 'https://sofifa.com' + player.find('a', class_ = 'tooltip')['href']

            #Append the player_data dict to the player_data_list
            player_data_list.append(player_data)

    #Save the player_data_list to the scraped_data dictionary
    scraped_data['players_data'] = player_data_list

    #----------Team Data Scraping----------#        

    #Feed the base teams url
    base_teams_url = "https://sofifa.com/teams?type=club&col=oa&sort=desc"

    #Perform this scrape 5 pages deep
    for x in range (1,6):

        #Define the current url source
        current_teams_url = base_teams_url + '&offset=' + f'{(x-1)*60}'
        browser.visit(current_teams_url)

        #Obtain the HTML and parse it into a BeautifulSoup object
        team_html = browser.html
        team_soup = bs(team_html, "html.parser")

        #Find the main content section of the page
        teams_main_table = team_soup.find('tbody')

        #Select the rows (teams) of the main content table
        teams = teams_main_table.find_all('tr')

        #Save the following information for each team
        for team in teams:

            #Make a dictionary to temporarily store each teams's data
            team_data = {}

            #Team name
            team_data['name'] = team.find('td', class_ = 'col-name-wide').find('div', class_ = 'bp3-text-overflow-ellipsis').get_text()

            #Team country
            team_data['country'] = team.find('a', class_ = 'sub').find('img')['title']

            #Team league
            team_data['league'] = team.find('a', class_ = 'sub').find('div').get_text().split('(')[0].strip()
            #https://stackoverflow.com/questions/959215/how-do-i-remove-leading-whitespace-in-python

            #Team overall rating
            team_data['overall_rating'] = team.find('td', class_ = 'col-oa').find('span').get_text()

            #Team transfer budget
            team_data['transfer_budget_in_millions_of_euros'] = team.find('td', class_ = 'col-tb').get_text().split('€')[1].split('M')[0]

            #Team logo
            team_data['logo'] = team.find('td', class_ = 'col-avatar').find('img')['data-src']

            #Team url extension
            team_data['url_extension'] = 'https://sofifa.com' + team.find('td', class_ = 'col-name-wide').find('a')['href']

            #Append the team_data dict to the team_data_list
            team_data_list.append(team_data)


    #Save the team_data_list to the scraped_data_dictionary
    scraped_data['teams_data'] = team_data_list

    #----------Quit Broswer & Fix Scraping Errors----------#

    #Quit browser
    browser.quit() 

    #Fix N/A values that were unable to be scraped
    for player in scraped_data['players_data']:
        if player['name'] == 'Heung Min Son':
            player['primary_position'] = 'LM'
        elif player['name'] == 'Frenkie de Jong':
            player['primary_position'] = 'CM'
        elif player['name'] == 'Julian Brandt':
            player['primary_position'] = 'CAM'
        elif player['name'] == 'Kyle Walker':
            player['primary_position'] = 'RB'
        elif player['name'] == 'João Pedro Cavaco Cancelo':
            player['primary_position'] = 'RB'
        elif player['name'] == 'Dele Alli':
            player['primary_position'] = 'CAM'
        elif player['name'] == 'Tanguy Ndombele':
            player['primary_position'] = 'CM'
        elif player['name'] == 'Phil Foden':
            player['primary_position'] = 'CAM'
        elif player['name'] == 'Pierre-Emile Højbjerg':
            player['primary_position'] = 'CDM'
        elif player['name'] == 'Lucas Rodrigues M. Silva':
            player['primary_position'] = 'RM'
        elif player['name'] == 'José Ángel Esmoris Tasende':
            player['primary_position'] = 'LB'

    #Fix blank value that was not present in the scraped website
    for team in scraped_data['teams_data']:
        if team['name'] == 'Roma':
            team['league'] = 'Italian Serie A'
        elif team['name'] == 'Spezia':
            team['league'] = 'Italian Serie A'

    #----------Return Final Dataset----------#

    #Return final dataset
    return scraped_data