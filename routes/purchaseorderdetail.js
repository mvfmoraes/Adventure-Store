module.exports = app => {
    app.route('/purchaseorderdetail').get(app.services.purchaseorderdetail.getAll);
    app.route('/purchaseorderdetail/:PurchaseOrderID').get(app.services.purchaseorderdetail.get);
}