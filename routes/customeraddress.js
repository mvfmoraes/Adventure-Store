module.exports = app => {
    app.route('/customeraddress').get(app.services.customeraddress.getAll);
    app.route('/customeraddress/:CustomerID').get(app.services.customeraddress.get);
}