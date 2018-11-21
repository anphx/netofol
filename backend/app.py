from flask import Flask, request
from flask import make_response, render_template

import json, uuid

app = Flask(__name__)


@app.route("/")
def main():
    return render_template('index.html')


@app.route("/s/<session_id>", methods=['GET'])
def load_with_session(session_id):
    return render_template('index.html', session = session_id, history = load_history(session_id))


@app.route('/save', methods=['POST'])
def save():
    session_id = request.json['session_id']
    history = request.json['history']

    if session_id == 0:
        session_id = str(uuid.uuid4())[:8]

    data = {}
    data['session_id'] = session_id

    save_to_db(session_id, history)

    return json.dumps(data), 200, {'Content-Type': 'application/json'}


def load_history(session):
    # load history from db
    return session

def save_to_db(session_id, history):

    return "success"

if __name__ == "__main__":
    app.run()