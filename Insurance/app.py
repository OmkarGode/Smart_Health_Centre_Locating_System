from flask import Flask, request, render_template
import pickle
import numpy as np
from sklearn.ensemble import RandomForestRegressor

app = Flask(__name__, template_folder='./templates', static_folder='./static')

# Load the pickled model when the application starts
Pkl_Filename = "linear_regression_model.pkl"
with open(Pkl_Filename, 'rb') as file:
    model = pickle.load(file)

# Define the home route
@app.route('/')
def home():
    return render_template('home.html')

# Define the route for prediction
@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Extract features from the form
        features = [float(x) for x in request.form.values()]  # Convert to float instead of int
        # Convert features to numpy array
        final = np.array(features).reshape((1, 6))
        # Make prediction using the model
        pred = model.predict(final)[0]
        return render_template('op.html', pred='Expected amount is {0:.3f}'.format(pred))
    except Exception as e:
        return render_template('op.html', pred='Error calculating Amount! {}'.format(e))

if __name__ == '__main__':
    app.run(debug=True)
