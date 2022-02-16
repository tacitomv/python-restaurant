import flask
from flask import jsonify
from data.database import SimpleDatabase as simpleDatabase

app = flask.Flask(__name__)
app.config["DEBUG"] = True

db = simpleDatabase()

@app.errorhandler(404)
def page_not_found(e):
    return "<h1>404</h1><p>The resource could not be found.</p>", 404

@app.route('/', methods=['GET'])
def home():
    return "<h1>Restaurante API</h1>"

@app.route('/api/v1/items/all', methods=['GET'])
def all_items():
    return jsonify(db.getAllItems())


@app.route('/api/v1/items', methods=['GET'])
def one_item():
    if 'id' in flask.request.values:
        id = int(flask.request.values.get('id'))
    else:
        return "Error: No id field provided. Please specify an id."

    results = []
    item = db.getItem(id)
    if item != None:
        results.append(item)

    return jsonify(results)


@app.route('/api/v1/categories/all', methods=['GET'])
def all_categories():
    return jsonify(db()['categories'])

@app.route('/api/v1/orders/all', methods=['GET'])
def all_orders():
    return jsonify(db.getAllOrders())

@app.route('/api/v1/orders', methods=['GET'])
def one_order():
    if 'id' in flask.request.values:
        id = int(flask.request.values.get('id'))
    else:
        return "Error: No id field provided. Please specify an id."

    results = []
    item = db.getOrder(id)
    if item != None:
        results.append(item)

    return jsonify(results)

@app.route('/api/v1/orders', methods=['POST'])
def place_order():
    data = flask.request.get_json()

    if data:
        return jsonify(db.addOrder(data))
    else:
        return "Error: No body provided."

app.run()
