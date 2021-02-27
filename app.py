import sqlalchemy
from sqlalchemy import create_engine, func, desc
from sqlalchemy.orm import Session
import sqlite3


####################################
# Create database
####################################
from sqlalchemy.ext.automap import automap_base

engine = create_engine('sqlite:///Data/VAERS.sqlite', echo=False)
Base= automap_base()
Base.prepare(engine, reflect=True)

#Save references for each table
# World_Data = Base.classes.worldWideData
# print (Base.classes.keys())
US_Data = Base.classes["2021VAERS"]
####################################
# Flask Setup
####################################
from flask import Flask, jsonify, redirect, render_template
app= Flask(__name__)

####################################
# Flask Routes
####################################

#HOME/WELCOME PAGE
@app.route("/")
def homepage():
    return render_template("index.html")

@app.route("/dose1data")
def onedata():
    conn = sqlite3.connect("Data/doseOneSymptoms.db")
    cur = conn.cursor()
    dose_one_info = cur.execute("select * from 'doseOneSymptoms';")
    results = dose_one_info.fetchall()
    conn.close()
    
    return jsonify(results)


@app.route("/dose2data")
def twodata():
    conn = sqlite3.connect("Data/doseTwoSymptoms.db")
    cur = conn.cursor()
    dose_two_info = cur.execute("select * from 'doseTwoSymptoms';")
    results = dose_two_info.fetchall()
    conn.close()

    return jsonify(results)

@app.route("/otherdosedata")
def otherdata():
    conn = sqlite3.connect("Data/doseUnkSymptoms.db")
    cur = conn.cursor()
    dose_unk_info = cur.execute("select * from 'doseUnkSymptoms';")
    results = dose_unk_info.fetchall()
    conn.close()

    # import numpy as np
    # dose_unk_results = list(np.ravel(results))
    
    return jsonify(results)

# @app.route("/graph")
# def bargraph():
#     return render_template("index2.html")

@app.route("/graph")
def bargraph():
    return render_template("index2.html")

#US DATA PAGE
@ app.route("/us_vaccines")
def us_vaccines():
    session = Session(engine)

    results = session.query(US_Data.VAERS_ID, US_Data.VAX_TYPE, US_Data.VAX_MANU, US_Data.VAX_DOSE_SERIES, US_Data.STATE, US_Data.AGE_YRS, US_Data.SEX, US_Data.VAX_DATE, US_Data.NUMDAYS, US_Data.SYMPTOM1, US_Data.SYMPTOM2, US_Data.SYMPTOM3, US_Data.SYMPTOM4, US_Data.SYMPTOM5).all()
    session.close()

    patients= []

    for ID, VAX_TYPE, VAX_MANU, VAX_DOSE_SERIES, STATE, AGE_YRS, SEX, VAX_DATE, NUMDAYS, SYMPTOM1, SYMPTOM2, SYMPTOM3, SYMPTOM4, SYMPTOM5 in results:
        patients_dict = {}
        patients_dict["ID"] = ID
        patients_dict["vax_type"] = VAX_TYPE
        patients_dict["vax_manu"] = VAX_MANU
        patients_dict["vax_dose_series"] = VAX_DOSE_SERIES
        patients_dict["state"] = STATE
        patients_dict["age"] = AGE_YRS
        patients_dict["sex"] = SEX
        patients_dict["vax_date"] = VAX_DATE
        patients_dict["symp_day_count"] = NUMDAYS
        patients_dict["symptom1"] = SYMPTOM1
        patients_dict["symptom2"] = SYMPTOM2
        patients_dict["symptom3"] = SYMPTOM3
        patients_dict["symptom4"] = SYMPTOM4
        patients_dict["symptom5"] = SYMPTOM5
        patients.append(patients_dict)

    return jsonify(patients)

if __name__ == '__main__':
    app.run(debug=True)