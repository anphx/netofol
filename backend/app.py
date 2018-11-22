#import pymongo
from flask import Flask, request
from flask import make_response, render_template
from flask_pymongo import PyMongo
from flask_compress import Compress

import json, uuid

app = Flask(__name__)
Compress(app)

app.config["MONGO_URI"] = "mongodb://localhost:27017/d4g"
mongo = PyMongo(app)




@app.route("/")
def main():
    return render_template('index.html')


@app.route("/s/<session_id>", methods=['GET'])
def load_with_session(session_id):
    return render_template('index.html', session = session_id, history = list(load_history(session_id)))


@app.route('/save', methods=['POST'])
def save():
    session_id = request.json['session_id']
    history = request.json['history']

    if session_id == '0' or session_id == '':
        session_id = str(uuid.uuid4())[:8]

    data = {}
    data['session_id'] = session_id

    save_to_db(session_id, history)

    return json.dumps(data), 200, {'Content-Type': 'application/json'}


def load_history(session):
    # load history from db
    res = mongo.db.sessions.find({"session_id":session});
    return res

def save_to_db(session_id, history):
    mongo.db.sessions.insert({"session_id":session_id,"history":history})
    return "success"

if __name__ == "__main__":
    app.run()
