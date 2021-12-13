module.exports = app => {
    app.route('/salesreason').get(app.services.salesreason.getAll);
    app.route('/salesreason/:SalesReasonID').get(app.services.salesreason.get);
}