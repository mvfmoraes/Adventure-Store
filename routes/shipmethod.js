module.exports = app => {
    app.route('/shipmethod').get(app.services.shipmethod.getAll);
    app.route('/shipmethod/:ShipMethodID').get(app.services.shipmethod.get);
}