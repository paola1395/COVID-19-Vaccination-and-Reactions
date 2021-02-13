
import sqlalchemy
from sqlalchemy import create_engine, func, desc

####################################
# Create database
####################################
from sqlalchemy.ext.automap import automap_base

engine = create_engine('sqlite:///VAERS.db', echo=False)
Base= automap_base()
Base.prepare(engine, reflect=True)

#Save references for each table
World_Data = Base.classes.worldWideData
US_Data = Base.classes.VAERS

####################################
# Flask Setup
####################################
from flask import Flask, jsonify
app= Flask(__name__)

####################################
# Flask Routes
####################################

#HOME/WELCOME PAGE
@app.route("/")

def Homepage():

from sqlalchemy.orm import Session
#US DATA PAGE


#WORLDWIDE DATA PAGE