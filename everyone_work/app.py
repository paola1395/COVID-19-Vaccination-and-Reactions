from flask import Flask, jsonify, redirect, render_template
app= Flask(__name__)

####################################
# Flask Routes
####################################

#HOME/WELCOME PAGE
@app.route("/")
def homepage():
    return render_template("index.html")

@app.route("/geomap")
def geomap():
    return render_template("leaflet.html")

if __name__ == '__main__':
    app.run(debug=True)