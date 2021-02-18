import sqlite3

from flask import Flask, jsonify
app = Flask(__name__)

@app.route("/")
def welcome():
    """List all available api routes."""
    return (
        f"Available Routes:<br/>"
        f"/data<br/>"
    )


@app.route("/data")
def data():
    # Set up the connection to our database
    conn = sqlite3.connect("Data/VAERS.db")

    # Create a cursor object
    cur = conn.cursor()

    # Execute a SQL query
    all_info = cur.execute("select * from '2021VAERS';")

    # Fetch the results
    results = all_info.fetchall()

    # Close the connection
    conn.close()

    import numpy as np
    # Convert list of tuples into normal list
    all_results = list(np.ravel(results))

    return jsonify(all_results)

if __name__ == '__main__':
    app.run(debug=True)
