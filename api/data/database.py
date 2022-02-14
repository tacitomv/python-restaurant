import json
from unicodedata import decimal


class SimpleDatabase:
    __data = {}

    def __init__(self):
        with open('data/db.json', 'r+') as f:
            self.__data = json.load(f)

    def getAllItems(cls):
        return cls.__data['items']

    def getAllOrders(cls):
        return cls.__data['orders']

    def getItem(cls, id=None):
        if id:
            return next(filter(lambda x: x['id'] == id, cls.__data['items']), {})
        return None

    def getOrder(cls, id=None):
        if id:
            return next(filter(lambda x: x['id'] == id, cls.__data['orders']), {})
        return None

    def addOrder(cls, order):
        cls.__data['orders'].append(order)
        return True

    def removeOrder(cls, id):
        if id:
            cls.__data['orders'] = list(
                filter(lambda x: x['id'] != id, cls.__data['orders']))
            return True
        return False

    def getOrderIdx(cls, order):
        return cls.__data['orders'].index(order)

    def updateOrder(cls, index, order):
        index = cls.getOrderIdx(order)

        if index and order:
            cls.__data['orders'][index] = order
            return True
        return False
