from operator import is_
from flask_app.config.mysqlconnection import connectToMySQL
import re
from flask import flash

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
PW_REGEX = re.compile(r'\d.*[A-Z]|[A-Z].*\d')

class User():
    def __init__(self, data):
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.password = data['password']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def create_user(cls, data):

        query = "INSERT INTO users (first_name, last_name, email, password) VALUES (%(first_name)s, %(last_name)s, %(email)s, %(password)s);"

        return connectToMySQL("validation_schema").query_db(query, data)
    
    @classmethod
    def get_user_by_email(cls, data):

        query = "SELECT * FROM users WHERE users.email  = %(email)s"

        result = connectToMySQL("validation_schema").query_db(query, data)

        return result

    @staticmethod
    def validate_user(data):
        is_valid = True

        if len(data['first_name']) < 2:
            flash("First name must be at leasst 2 characters")
            is_valid = False

        if len(data['last_name']) < 2:
            flash("Last name must be at least 2 characters")
            is_valid = False

        if not EMAIL_REGEX.match(data['email']):
            flash("Invalid email address!")
            is_valid = False

        if len(User.get_user_by_email(data)) != 0:
            flash("Email is already in use!")
            is_valid = False

        if len(data['password']) < 8:
            flash('Password must be at least 8 characters')
            is_valid = False

        if data['confirm_password'] != data['password']:
            flash('Confirm your password')
            is_valid = False

        return is_valid
    
    # @staticmethod
    # def validate_login(data):
    #     is_valid = True
