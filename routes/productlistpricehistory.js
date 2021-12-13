module.exports = app => {
    app.route('/productlistpricehistory').get(app.services.productlistpricehistory.getAll);
    app.route('/productlistpricehistory/:ProductID').get(app.services.productlistpricehistory.get);
}