module.exports = app => {
    app.route('/customer').get(app.services.customer.getAll);
    app.route('/customer/:CustomerID').get(app.services.customer.get);
}