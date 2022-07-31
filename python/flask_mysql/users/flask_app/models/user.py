from flask_app.config.mysqlconnection import connectToMySQL
import re

# user.py
class User():

    def __init__(self, data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def get_all_users(cls):

        query = "SELECT * FROM users;"

        results = connectToMySQL('users_schema').query_db(query)

        users = []

        for row in results:
            users.append(User(row))

        return users

    @classmethod
    def add_user(cls, data):

        query = "INSERT INTO users (first_name, last_name, email) VALUES (%(first_name)s, %(last_name)s, %(email)s);"

        return connectToMySQL('users_schema').query_db(query, data)


    @classmethod
    def show_user(cls, data):

        query = "SELECT * FROM users WHERE users.id = %(id)s;"

        results = connectToMySQL('users_schema').query_db(query, data)

        return results[0]

    @classmethod
    def delete_user(cls, data):

        query = "DELETE FROM users WHERE users.id = %(id)s;"

        return connectToMySQL('users_schema').query_db(query, data)

    @classmethod
    def edit_user(cls, data):

        query = "UPDATE users SET first_name = %(first_name)s, last_name = %(last_name)s, email = %(email)s, updated_at = NOW() WHERE id = %(id)s;"

        return connectToMySQL('users_schema').query_db(query, data)



#UPDATE WITH TABLE COLS