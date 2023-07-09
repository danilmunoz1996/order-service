class OrderService {
    constructor(dbAdapter) {
        this.dbAdapter = dbAdapter;
    }

    async create(order) {
        // Add any business logic here before creating the model
        return await this.dbAdapter.create(order);
    }

    async read(id) {
        // Add any business logic here before reading the model
        return await this.dbAdapter.read(id);
    }

    async update(id, order) {
        // Add any business logic here before updating the model
        return await this.dbAdapter.update(id, order);
    }

    async delete(id) {
        // Add any business logic here before deleting the model
        return await this.dbAdapter.delete(id);
    }

    async list(columnName, value) {
        // Add any business logic here before listing the model
        return await this.dbAdapter.list(columnName, value);
    }

}

module.exports = OrderService;
