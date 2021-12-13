module.exports = app => {
    app.route('/currencyrate').get(app.services.currencyrate.getAll);
    app.route('/currencyrate/:CurrencyRateID').get(app.services.currencyrate.get);
}