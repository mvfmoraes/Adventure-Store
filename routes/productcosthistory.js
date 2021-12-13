module.exports = app => {
    app.route('/productcosthistory').get(app.services.productcosthistory.getAll);
    app.route('/productcosthistory/:ProductID').get(app.services.productcosthistory.get);
}