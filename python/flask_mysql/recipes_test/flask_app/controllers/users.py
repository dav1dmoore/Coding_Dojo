from flask_app import app
from flask import render_template, request, redirect, session, flash
from flask_app.models.user import User

@app.route('/')
def display_login():
    return render_template("index.html")

@app.route('/user/registration', methods=['post'])
def register():
    if User.validate_Registration(request.form) == False:
        return redirect('/')
    user_exists = User.get_one(request.form)
    if user_exists == True:
        flash("This email already exists!", "error_registration_email")
        return redirect('/')


