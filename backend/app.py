import pymongo
from pymongo import MongoClient
from flask import Flask, request
from flask import make_response, render_template


import json, uuid

app = Flask(__name__)

MONGO_HOST = "mongodb://anis:tillicollapse4411@ds133353.mlab.com:33353/d4g"
MONGO_PORT = 23456
MONGO_DB = "d4g"
MONGO_USER = "anis"
MONGO_PASS = "tillicollapse"
connection = MongoClient(MONGO_HOST, MONGO_PORT)
mongo = connection[MONGO_DB]


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

    if session_id == '0':
        session_id = str(uuid.uuid4())[:8]

    data = {}
    data['session_id'] = session_id

    save_to_db(session_id, history)

    return json.dumps(data), 200, {'Content-Type': 'application/json'}


def load_history(session):
    # load history from db
    res = mongo.d4g.find({"session_id":session});
    return res

def save_to_db(session_id, history):
    mongo.d4g.insert({"session_id":session_id,"history":history})
    return "success"

if __name__ == "__main__":
    app.run()
