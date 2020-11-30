FROM tiangolo/uwsgi-nginx-flask:python3.8
WORKDIR /cvapp
COPY ./cvapp/requirements.txt requirements.txt
RUN pip3 install -q -r /cvapp/requirements.txt
COPY ./cvapp /cvapp

# ENTRYPOINT ["python"]
# CMD ["main.py"]
CMD gunicorn --bind 0.0.0.0:$PORT wsgi