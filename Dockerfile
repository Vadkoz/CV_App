FROM tiangolo/uwsgi-nginx-flask:python3.8
WORKDIR .
COPY ./requirements.txt requirements.txt
RUN  pip install --upgrade pip
RUN pip3 install -q -r requirements.txt
COPY . . 

CMD gunicorn --bind 0.0.0.0:$PORT wsgi
