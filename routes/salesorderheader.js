module.exports = app => {
    app.route('/salesorderheader').get(app.services.salesorderheader.getAll);
    app.route('/salesorderheader/:SalesOrderID').get(app.services.salesorderheader.get);
}