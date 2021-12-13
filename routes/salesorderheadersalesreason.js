module.exports = app => {
    app.route('/salesorderheadersalesreason').get(app.services.salesorderheadersalesreason.getAll);
    app.route('/salesorderheadersalesreason/:SalesOrderID').get(app.services.salesorderheadersalesreason.get);
}