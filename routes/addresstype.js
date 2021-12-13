module.exports = app => {
    app.route('/addresstype').get(app.services.addresstype.getAll);
    app.route('/addresstype/:AddressTypeID').get(app.services.addresstype.get);
}