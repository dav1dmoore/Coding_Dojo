from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = "submit"

@app.route('/')         
def index():
    return render_template("index.html")

@app.route('/results')
def result():
    return render_template('results.html')

@app.route('/result', methods=['post'])
def submit():
    session['full_name'] = request.form['full_name']
    session['location'] = request.form['location']
    session['language'] = request.form['language']
    session['comment'] = request.form['comment']
    session['ide'] = request.form['ide']
    print(request.form)
    return redirect("/results")

# @app.route('/checkout', methods=['POST'])         
# def checkout():
#     print(request.form)
#     count = int(request.form['strawberry']) + int(request.form['raspberry']) + int(request.form['apple'])
#     print(f"Charging {request.form['first_name']} for {count} fruits")


#     return redirect("/checkout.html")

# @app.route('/fruits')         
# def fruits():
#     return render_template("fruits.html")

if __name__=="__main__":   
    app.run(debug=True)    