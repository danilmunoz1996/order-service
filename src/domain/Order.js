const { v4: uuidv4 } = require('uuid');

    class Order {
        constructor({ createdBy, updatedAt, updatedBy, deletedAt, deletedBy, status, orderDate, amount, customerId, deliveryId, paymentId, deliveryTime }) {
            this.createdAt = Date.now().toString();
           this.createdBy = createdBy || null;
       this.updatedAt = updatedAt || null;
       this.updatedBy = updatedBy || null;
       this.deletedAt = deletedAt || null;
       this.deletedBy = deletedBy || null;
       this.status = status || null;
       this.orderDate = orderDate || null;
       this.amount = amount || null;
       this.customerId = customerId || null;
       this.deliveryId = deliveryId || null;
       this.paymentId = paymentId || null;
       this.deliveryTime = deliveryTime || null;

            this.orderId = uuidv4() + '_' + this.createdAt;
        }

        toItem() {
            return {
                orderId: this.orderId,
                createdAt: this.createdAt,
                createdBy: this.createdBy, updatedAt: this.updatedAt, updatedBy: this.updatedBy, deletedAt: this.deletedAt, deletedBy: this.deletedBy, status: this.status, orderDate: this.orderDate, amount: this.amount, customerId: this.customerId, deliveryId: this.deliveryId, paymentId: this.paymentId, deliveryTime: this.deliveryTime,
            };
        }

        pk() {
            return this.orderId;
        }

        static sortKey(key) {
            return key.split('_')[1];
        }

        static getKeys(pk) {
            return {
                orderId: pk,
                createdAt: Order.sortKey(pk)
            };
        }
            
    }

    module.exports = Order;
    