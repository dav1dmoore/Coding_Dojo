from flask import Flask, render_template
app = Flask(__name__)

#Checkerboard thats 8x8
@app.route('/')
def make_board8x8():
    return render_template("index.html", x=8, y=8)

#Checkerboard thats 8x4
@app.route('/4')
def make_board8x4():
    return render_template("index.html", x=8, y=4)

#Checkerboard thats responsive
@app.route('/<int:x>/<int:y>')
def make_board(x,y):
    return render_template("index.html", x=x, y=y)

if __name__=="__main__":
    app.run(debug=True)

