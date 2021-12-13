module.exports = app => {
    app.route('/storecontact').get(app.services.storecontact.getAll);
    app.route('/storecontact/:CustomerID').get(app.services.storecontact.get);
}