module.exports = app => {
    app.route('/transactionhistoryarchive').get(app.services.transactionhistoryarchive.getAll);
    app.route('/transactionhistoryarchive/:TransactionID').get(app.services.transactionhistoryarchive.get);
}