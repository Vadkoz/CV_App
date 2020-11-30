import torch
import torch.nn as nn
import torchvision.transforms as transforms
from PIL import Image, ImageOps
import io
import base64
import os

class Flattener(nn.Module):
    def forward(self, x):
        batch_size, *_ = x.shape
        return x.view(batch_size, -1)

my_model = nn.Sequential(
            nn.Conv2d(1, 32, 5),
            nn.BatchNorm2d(32),
            nn.ReLU(inplace=True),
            nn.MaxPool2d(2),
            nn.Conv2d(32, 64, 5),
            nn.BatchNorm2d(64),
            nn.ReLU(inplace=True),
            nn.MaxPool2d(2),
            Flattener(),
            nn.Linear(64 * 4 * 4, 512),
            nn.BatchNorm1d(512),
            nn.ReLU(inplace=True),
            nn.Linear(512, 10)
          )

tfs = transforms.Compose([
    transforms.ToTensor(),
    transforms.Normalize((0.1307,), (0.3081,))
])


def predict(img):
    '''
    make prediction of base64 picture
    '''
    state_dict = torch.load('services/dict', map_location=torch.device('cpu'))
    model = my_model
    model.load_state_dict(state_dict)
    model.type(torch.FloatTensor)
    starter = img.find(',')
    img = Image.open(io.BytesIO(base64.b64decode(img[starter+1:]))).resize((28,28))
    img = tfs(ImageOps.invert(img.convert('L'))).unsqueeze(0)
    model.eval()

    return int(torch.argmax(model(img)))