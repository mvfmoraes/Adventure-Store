module.exports = app => {
    app.route('/address').get(app.services.address.getAll);
    app.route('/address/:AddressID').get(app.services.address.get);
}