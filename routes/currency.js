module.exports = app => {
    app.route('/currency').get(app.services.currency.getAll);
    app.route('/currency/:CurrencyCode').get(app.services.currency.get);
}