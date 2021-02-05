from flask import Flask
import os 

app = Flask(__name__)
app.secret_key = 'some key'

import routes

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 33333))
    app.run(host='0.0.0.0', port=port)
