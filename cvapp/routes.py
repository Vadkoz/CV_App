from main import app
from flask import render_template, request, jsonify
from services import mnist_prediction as mp
from services import ssd_detection as sd
from PIL import Image, ImageOps
import io
import base64
import os
import re
from io import BytesIO


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/upload_mnist', methods=['POST'])
def upload_mnist():
    img = request.form['imgBase64']
    return jsonify(mp.predict(img))

@app.route('/upload_ssd',  methods=['POST'])
def upload_ssd():   
    img =  request.form['image']
    img_base64 = sd.make_detection(img)
    return jsonify(img_base64)

@app.route('/mnist', methods=['GET'])
def draw():   
    return render_template('draw.html')

@app.route('/ssd', methods=['GET'])
def ssd():    
    return render_template('ssd.html')