Simple pet-project, consist of three tasks: mnist digit recognition, detection pistols and knives on photo, super-resolving image with x4 upscaling.

- Digit recognition task represents a simple drawing application with cnn-based prediction model.
- For detection task i used SSD model and trained it from scratch. Works not too well, needs more training iterations. 
- Super-resolution task is not ready yet. 

App uses docker containing Flask. 
Models are written in PyThorch. 


Test demo available [here](https://evening-ravine-67035.herokuapp.com/). May open for a long time, due to heroku's politics for free accounts.
