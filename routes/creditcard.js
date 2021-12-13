module.exports = app => {
    app.route('/creditcard').get(app.services.creditcard.getAll);
    app.route('/creditcard/:CreditCardID').get(app.services.creditcard.get);
}