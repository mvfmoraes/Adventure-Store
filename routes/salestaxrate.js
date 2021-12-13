module.exports = app => {
    app.route('/salestaxrate').get(app.services.salestaxrate.getAll);
    app.route('/salestaxrate/:SalesTaxRateID').get(app.services.salestaxrate.get);
}