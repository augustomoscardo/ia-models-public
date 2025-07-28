from flask import Flask, request, send_from_directory
from flask_cors import cross_origin
from uuid import uuid4

from models.api import convert_text_to_audio
from utils import save_audio

app = Flask(__name__)

@app.route("/")
def hello(): 
    return "Hello, World!"

@app.route("/text_to_audio", methods=["POST"]) # {"text"": "texto para converter em audio}
@cross_origin()
def text_to_audio():
    text = request.json["text"]
    audio, sample_rate = convert_text_to_audio(text)
    file_id = uuid4()

    save_audio(audio, sample_rate, file_id)

    return [{"url": f"/audio/{file_id}.wav"}]

@app.route("/audio/<path:audio_file>")
def get_audio(audio_file):
    return send_from_directory("audio", audio_file)
