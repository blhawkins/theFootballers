#Import dependencies
from flask import Flask, render_template, redirect, jsonify
from bson.json_util import dumps
from flask_pymongo  import PyMongo
import scrape_sofifa

app = Flask(__name__)

#Use PyMongo to set up a Mongo connection
mongo = PyMongo(app, uri='mongodb://localhost:27017/fifa_db')

#Route that initiates the scraping process
@app.route('/scrape')
def scrape():
    #Run the scrape function
    current_scrape = scrape_sofifa.scrape()
    mongo.db.scraped_data.update({}, current_scrape, upsert = True)
    return redirect('/', code = 302)

@app.route("/jsonified")
def jsonified():
    scraped_data = list(mongo.db.scraped_data.find())
    return dumps(scraped_data)

if __name__ == '__main__':
    app.run(debug = True)