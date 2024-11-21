# backend/app.py

from flask import Flask, request, jsonify
import hashlib  # Or use your custom hashing algorithm

app = Flask(__name__)

@app.route('/hash_password', methods=['POST'])
def hash_password():
    data = request.json
    password = data.get("password")
    if not password:
        return jsonify({"error": "Password not provided"}), 400
    
    hashed_password = hashlib.sha256(password.encode()).hexdigest()
    return jsonify({"hashed_password": hashed_password})

if __name__ == "__main__":
    app.run(port=5000)  # Run on port 5000
