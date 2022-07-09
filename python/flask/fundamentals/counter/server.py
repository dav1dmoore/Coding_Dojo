from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)  
app.secret_key = "secret"

@app.route('/')         
def index():
    if 'count' not in session:
        session['count'] = 0
    session['count'] += 1
    print(session['count'])
    return render_template("/index.html")

@app.route('/destroy_session')
def destroy():
    session.clear()
    if 'count' not in session:
        session['count'] = 1
    return render_template('/index.html')

@app.route('/increment', methods=['POST'])         
def add2():
    session['increment_amount'] = 2
    session['count'] += session['increment_amount']
    return render_template('/index.html')

@app.route('/reset', methods=['post'])
def reset():
    session.pop('count')
    session['count'] = 0
    return render_template("/index.html")

@app.route('/set_increment', methods=['post'])
def set_increment():
    print(session['increment_amount'])
    session['increment_amount'] = request.form['set_increment']
    session['count'] += session['increment_amount']
    return render_template('/index.html')

if __name__=="__main__":   
    app.run(debug=True)    
