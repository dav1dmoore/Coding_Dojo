from flask_app.config.mysqlconnection import connectToMySQL


class Employee():

    def __init__(self, data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.middle_name = data['middle_name']
        self.last_name = data['last_name']
        self.salary = data['salary']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.department_id = data['departmet_id']

    @classmethod
    def get_all_employees(cls):

        query = "SELECT * FROM employees;"

        results = connectToMySQL('employees').query_db(query)

        employees = []

        for row in results:
            employees.append(Employee(row))

        for row in results:
            print(row)

        return employees
        # sent to controller passed list to templates