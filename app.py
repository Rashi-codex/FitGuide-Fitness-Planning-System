from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

@app.route('/')
def login():
    return render_template("index.html")

@app.route('/dashboard', methods=['POST'])
def dashboard():
    name = request.form.get("name")
    age = request.form.get("age")
    goal = request.form.get("goal")

    return render_template("dashboard.html", name=name, age=age, goal=goal)

if __name__ == '__main__':
    app.run(debug=True)