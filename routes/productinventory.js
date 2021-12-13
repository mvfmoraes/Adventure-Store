module.exports = app => {
    app.route('/productinventory').get(app.services.productinventory.getAll);
    app.route('/productinventory/:ProductID').get(app.services.productinventory.get);
}