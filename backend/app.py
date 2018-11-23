#import pymongo
from flask import Flask, request
from flask import make_response, render_template
from flask_pymongo import PyMongo
from flask_compress import Compress
from flask_cors import CORS
import sys
import pprint

import json, uuid

app = Flask(__name__)
Compress(app)
CORS(app)



app.config["MONGO_URI"] = "mongodb://localhost:27017/d4g"
mongo = PyMongo(app)




@app.route("/")
def main():
    return render_template('index.html')


@app.route("/s/<session_id>", methods=['GET'])
def load_with_session(session_id):
    return render_template('index.html', session = session_id, history = list(load_history(session_id))[0]["history"])


@app.route('/save', methods=['POST'])
def save():
    pprint.pprint(request.json)
    session_id = request.json['session_id']
    history = request.json['history']
    locked = request.json['finalize']

    if session_id == '0' or session_id == '':
        session_id = str(uuid.uuid4())[:8]

    data = {}
    data['session_id'] = session_id
    data['locked'] = locked

    is_survey_already_finished = save_to_db(session_id, history, locked)

    if  is_survey_already_finished == 'surveyAlreadyFinished':
        data['locked'] = "true"

    return json.dumps(data), 200, {'Content-Type': 'application/json'}


def load_history(session):
    # load history from db
    res = mongo.db.sessions.find({"session_id":session})
    return res

def save_to_db(session_id, history, locked):
    previous_records = load_history(session_id)
    if(previous_records.count() == 0):
        # print("zeroooooo", file=sys.stdout)
        mongo.db.sessions.insert({"session_id":session_id, "history":history, "locked": locked})
    else:
        #we have to merge things here
        pastHistory=list(previous_records)[0]['history']

        if pastHistory['locked'] == 'true':
            return 'surveyAlreadyFinished'


        pastHistory.update(history)
        print(pastHistory, file=sys.stdout)

        #we delete previous values
        mongo.db.sessions.delete_one({"session_id":session_id})
        mongo.db.sessions.insert({"session_id": session_id, "history": pastHistory, "locked": locked})
    return 'success'

if __name__ == "__main__":
    app.run()
