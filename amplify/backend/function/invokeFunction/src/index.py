import awsgi
from flask_cors import CORS
from flask import Flask, request, jsonify

app = Flask(__name__)
CORS(app)

BASE_ROUTE = '/prompt'

@app.route(BASE_ROUTE, methods=['GET'])
def get_message():
  return jsonify({'message': 'Hello from your new Amplify Python lambda!'})

def handler(event, context):
  return awsgi.response(app, event, context)