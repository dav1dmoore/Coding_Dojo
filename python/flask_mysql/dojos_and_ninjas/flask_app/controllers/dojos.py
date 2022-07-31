from flask_app import app
from flask import render_template, request, redirect, session, flash
from flask_app.models.dojo import Dojo
from flask_app.models.ninja import Ninja


@app.route("/")
def index():
    dojos = Dojo.show_dojo()
    return render_template('index.html', dojos=dojos)

@app.route("/add_dojo", methods=["post"])
def add_dojo():
    data = {
        'name': request.form['name']
    }

    Dojo.create_dojo(data)

    return redirect('/')

@app.route("/new_ninja")
def new_ninja():
    dojos = Dojo.show_dojo()
    return render_template('newninja.html', dojos=dojos)

@app.route("/dojoshow/<int:id>")
def dojoshow(id):
    data =  {
    'id': id
    }

    show_ninjas = Dojo.show_ninjas(data)
    
    return render_template('dojoshow.html', show_ninjas=show_ninjas)

@app.route("/add_ninja", methods=["post"])
def add_ninja():
    data = {
        'first_name': request.form['first_name'],
        'last_name': request.form['last_name'],
        'age': request.form['age'],
        'dojo_id': request.form['dojo_id']
    }

    Ninja.add_ninja(data)

    return redirect(f"/dojoshow/{data['dojo_id']}")