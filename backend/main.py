#!/usr/bin/env python3
from flask import Flask, jsonify
from core.config import config

app = Flask(__name__)


@app.errorhandler(404)
def error404(error):
    """error 404 handler"""
    return jsonify({"error": "Not found"}), 404


if __name__ == "__main__":
    app.run(host=config.HOST, port=config.PORT, threaded=True)
