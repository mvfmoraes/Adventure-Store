module.exports = app => {
    app.route('/vendor').get(app.services.vendor.getAll);
    app.route('/vendor/:VendorID').get(app.services.vendor.get);
}