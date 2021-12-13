module.exports = app => {
    app.route('/salesorderdetail').get(app.services.salesorderdetail.getAll);
    app.route('/salesorderdetail/:SalesOrderID').get(app.services.salesorderdetail.get);
}