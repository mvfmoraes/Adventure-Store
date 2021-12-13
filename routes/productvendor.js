module.exports = app => {
    app.route('/productvendor').get(app.services.productvendor.getAll);
    app.route('/productvendor/:PurchaseOrderID').get(app.services.productvendor.get);
}