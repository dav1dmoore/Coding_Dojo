from flask_app import app
from flask import render_template, request, redirect, session, flash
from flask_app.models.user import User

@app.route("/")
def index():
    users = User.get_all_users()
    
    return render_template("index.html", users=users)

@app.route("/add_user")
def linkAdd():
    return render_template("create.html")

@app.route("/create_user", methods=["post"])
def create_user():
    data = {
        'first_name': request.form['first_name'],
        'last_name': request.form['last_name'],
        'email': request.form['email']
    }

    user = User.add_user(data)

    return redirect('/')

@app.route("/show_user/<int:user_id>")
def show_single_user(user_id):
    data = {
        'id': user_id
    }
    user_info = User.show_user(data)

    return render_template("user.html", user_info=user_info)

@app.route("/delete/<int:user_id>")
def delete_the_user(user_id):
    data = {
        'id': user_id
    }
    User.delete_user(data)

    return redirect("/")

@app.route("/edit_user/<int:user_id>")
def edit(user_id):
    data = {
        'id': user_id
    }
    user_info = User.show_user(data)

    return render_template("edit.html", user_info=user_info)

@app.route("/update_user/<int:id>", methods=["post"])
def update_user(id):
    data = {
        'id': id,
        'first_name': request.form['first_name'],
        'last_name': request.form['last_name'],
        'email': request.form['email']
    }

    User.edit_user(data)

    return redirect("/")