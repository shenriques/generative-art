# serve.py

from flask import Flask
from flask import render_template

# creates a Flask application, named app
app = Flask(__name__)

# a route where we will display a welcome message via an HTML template
@app.route("/")
def hello():
    message = "Hello, World"
    return render_template('index.html', message=message)

@app.route("/random_walker")
def random_walker():
    sketch = "../static/random_walker.js"
    title = "Random Walker"
    explanation = "It works"
    return render_template('index.html', sketch=sketch, title=title, explanation=explanation)

@app.route("/random_distribution")
def random_distribution():
    sketch = "../static/random_distribution.js"
    title = "Random Distribution"
    explanation = "It works"
    return render_template('index.html', sketch=sketch, title=title, explanation=explanation)

@app.route("/gaussian_distribution")
def gaussian_distribution():
    sketch = "../static/gaussian_distribution.js"
    title = "Gaussian Distribution"
    explanation = "It works"
    return render_template('index.html', sketch=sketch, title=title, explanation=explanation)

# run the application
if __name__ == "__main__":
    app.run(debug=True)