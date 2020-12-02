Simple pet-project, consist of three tasks: mnist digit recognition, detection pistols, and knives on a photo, a super-resolving image with x4 upscaling.

- Digit recognition task represents a simple drawing application with CNN-based prediction model.
- For the detection task, I used SSD model and trained it from scratch. Works not too well need more training iterations.
- The super-resolution task is not ready yet.

App uses docker containing Flask. Models are written in PyTorch.
Test demo available here. May open for a long time also crash, due to Heroku's politics for free accounts.
