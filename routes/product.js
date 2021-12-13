module.exports = app => {
    app.route('/product').get(app.services.product.getAll);
    app.route('/product/:ProductID').get(app.services.product.get);
}