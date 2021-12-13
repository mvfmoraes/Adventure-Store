module.exports = app => {
    app.route('/vendoraddress').get(app.services.vendoraddress.getAll);
    app.route('/vendoraddress/:VendorID').get(app.services.vendoraddress.get);
}