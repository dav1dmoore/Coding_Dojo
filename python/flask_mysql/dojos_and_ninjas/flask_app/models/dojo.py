from flask_app.config.mysqlconnection import connectToMySQL

#dojo.py

class Dojo():
    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def show_dojo(cls):
        query = "SELECT * FROM dojos;"

        result = connectToMySQL('dojos_and_ninjas_schema').query_db(query)

        dojos = []
    
        for row in result:
            dojos.append(Dojo(row))
        
        return dojos

    @classmethod
    def create_dojo(cls, data):

        query = "INSERT INTO dojos (name) VALUES (%(name)s);"

        result = connectToMySQL('dojos_and_ninjas_schema').query_db(query, data)

        return result

    @classmethod
    def show_ninjas(cls, data):

        query = "SELECT * FROM dojos LEFT JOIN ninjas ON ninjas.dojo_id = dojos.id WHERE ninjas.dojo_id = %(id)s;"

        result = connectToMySQL('dojos_and_ninjas_schema').query_db(query, data)

        return result