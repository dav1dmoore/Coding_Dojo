from flask import render_template
from flask_app import app
from flask_app.models.employee import Employee

@app.route('/')
def index():

    employees = Employee.get_all_employees()

    return render_template('employees.html', employees = employees)