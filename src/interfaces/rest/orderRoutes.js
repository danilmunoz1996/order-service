const OrderService = require('../../application/orderService');
const Order = require('../../domain/Order');

/**
 * use DynamoDB as database
 */
const DbAdapter = require('../../infrastructure/db/dynamoDbAdapter');

const dbAdapter = new DbAdapter();
const orderService = new OrderService(dbAdapter);

/**
 * 
 * @param {*} event 
 * @returns 
 */
module.exports.create = async (event) => {
    const orderData = JSON.parse(event.body);
    const order = new Order(orderData);
    await orderService.create(order);
    return {
        statusCode: 201,
        body: JSON.stringify(order),
    };
};

/**
 * 
 * @param {*} event 
 * @returns 
 */
module.exports.read = async (event) => {
    const id = event.pathParameters.id;
    const order = await orderService.read(id);
    return {
        statusCode: 200,
        body: JSON.stringify(order),
    };
};

/**
 * 
 * @param {*} event
 * @returns
 */
module.exports.update = async (event) => {
    const id = event.pathParameters.id;
    const orderData = JSON.parse(event.body);
    await orderService.update(id, orderData);
    return {
        statusCode: 200,
        body: JSON.stringify(orderData),
    };
};

/**
 * 
 * @param {*} event 
 * @returns
 */
module.exports.delete = async (event) => {
    const id = event.pathParameters.id;
    await orderService.delete(id);
    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Object deleted successfully' }),
    };
};

/**
 * 
 * @param {*} event
 * @returns
 */
module.exports.list = async (event) => {
    const columnName = event.queryStringParameters.columnName;
    const value = event.queryStringParameters.value;
    const orders = await orderService.list(columnName, value);
    return {
        statusCode: 200,
        body: JSON.stringify(orders),
    };
};
