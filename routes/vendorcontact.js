module.exports = app => {
    app.route('/vendorcontact').get(app.services.vendorcontact.getAll);
    app.route('/vendorcontact/:VendorID').get(app.services.vendorcontact.get);
}