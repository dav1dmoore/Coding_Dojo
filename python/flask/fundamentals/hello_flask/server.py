from flask import Flask, render_template  # Import Flask to allow us to create our app
app = Flask(__name__)    # Create a new instance of the Flask class called "app"
@app.route('/<int:x>/<int:y>')          # The "@" decorator associates this route with the function immediately following
def hello_world(x,y):
    return render_template("index.html", x = x, y = y, result=x*y)
    # return 'Hello World!'  # Return the string 'Hello World!' as a response

@app.route("/play")

@app.route('/success')
def success(): #Invoked when success is hit
    return 'Success!'

@app.route('/multi/<int:x>/<int:y>')
def multi(x,y):
    results = []

    table_header = ['x']
    for i in range(0, y+1):
        table_header.append(i)
    results.append(table_header)

    for i in range(0, x+1):
        new_row = []
        for j in range(0, y+1):
            new_row.append(i*j)
        results.append(new_row)

    print(results)

    return render_template("multi.html", results = results)


if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True)    # Run the app in debug mode.

