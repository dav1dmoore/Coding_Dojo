from flask import Flask, render_template
app = Flask(__name__)

#Assignment 3 variable box number and color
@app.route('/play/<int:x>/<string:color>')
def play(x,color):
    return render_template("index.html", x=x, color=color)

#Assignment 2 variable box number, no color control
@app.route('/play/<int:x>')
def play1(x):
    return render_template("index.html", x=x, color='lightblue')

#Assignment 1 produce three boxes
@app.route('/play')
def play2():
    return render_template("index.html", x=3, color='lightblue')

if __name__=="__main__":
    app.run(debug=True)