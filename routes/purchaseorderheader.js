module.exports = app => {
    app.route('/purchaseorderheader').get(app.services.purchaseorderheader.getAll);
    app.route('/purchaseorderheader/:PurchaseOrderID').get(app.services.purchaseorderheader.get);
}