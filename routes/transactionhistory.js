module.exports = app => {
    app.route('/transactionhistory').get(app.services.transactionhistory.getAll);
    app.route('/transactionhistory/:TransactionID').get(app.services.transactionhistory.get);
}