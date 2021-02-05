# Simple CV App

## Introduction
This repo contains a simple app, that combines different tasks in Computer Vision domain. App uses docker containing Flask. Models are written in PyTorch. Test demo available here. May open for a long time also crash, due to Heroku's politics for free accounts.

## Tasks
### MNIST Digit Recognition
Digit recognition task represents a simple drawing application with CNN-based prediction model.
![Image]('/assets/mnist.jpg')

### Guns and Knives Detection
For the detection task, I used an [SSD model](https://arxiv.org/abs/1512.02325) and trained it from scratch.
Dataset for this task - [Guns and Knives](https://github.com/ari-dasci/OD-WeaponDetection/tree/master/Weapons%20and%20similar%20handled%20objects).
![Image]('/assets/gun.jpg')
## Technologies
- Web part was build with **Flask, JQuery, Docker**.
- Deep Learning part was developed with **PyTorch, NumPy**.
- [Deployed](https://evening-ravine-67035.herokuapp.com/) to Herokku. May open for a long time and also crash due to Herokku's policy for free accounts.

## Run Locally
This app is very easy to install and deploy in a Docker container.

By default, the Docker will expose port 80, so change this within the Dockerfile if necessary. When ready, simply use the Dockerfile to build the image.
In the root of the project run:
```sh
docker build -t cvapp .
```
This will create the image and pull in the necessary dependencies.
Once done, run the Docker image and map the port to whatever you wish on your host. In this example, we simply map port 80 of the host to port 80 of the Docker (or whatever port was exposed in the Dockerfile):

```sh
docker run -d -p 80:80 -e FLASK_APP=main.py -e FLASK_DEBUG=1 cvapp:latest flask run --host=0.0.0.0 --port=80
```
Verify the deployment by navigating to your server address in your preferred browser.
```sh
127.0.0.1:80
```
## Next Steps
Here is some steps TODO in near future:
- Super Resolution task with GANs (In progress).
- Improving Guns and Knives detection performance.
