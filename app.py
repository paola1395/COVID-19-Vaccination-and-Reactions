# Python SQL toolkit and Object Relational Mapper
import sqlalchemy

####################################
# Create database
####################################
from sqlalchemy import create_engine, inspect
# Create engine using the `VAERS.sqlite` database file
engine = create_engine("sqlite:///Data/VAERS.sqlite", echo=False)

from sqlalchemy.ext.automap import automap_base
# Declare a Base using `automap_base()`
Base = automap_base()

# Import modules to declare columns and column data types
from sqlalchemy import Column, Integer, String, Float
# Create the VAERS class and define the VAERS_ID column as the primary key
class VAERS(Base):
    __tablename__ = '2021VAERS'
    VAERS_ID = Column(Integer, primary_key=True)

# Use the Base class to reflect the database tables
Base.prepare(engine, reflect=True)

# Assign the dow class to a variable called `Vaers`
Vaers = Base.classes['2021VAERS']

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
    """List all available api routes."""
    return (
        f"Available Routes:<br/>"
        f"/data<br/>"
    )

@app.route("/data")
def data():
    from sqlalchemy.orm import Session
    # Create a session
    session = Session(engine)

    """Return the first row"""
    # Query all passengers
    first_row = session.query(Vaers.VAERS_ID).all()

    session.close()

    import numpy as np
    # Convert list of tuples into normal list
    results = list(np.ravel(first_row))

    return jsonify(results)

if __name__ == '__main__':
    app.run(debug=True)