module.exports = app => {
    app.route('/shoppingcartitem').get(app.services.shoppingcartitem.getAll);
    app.route('/shoppingcartitem/:ShoppingCartItemID').get(app.services.shoppingcartitem.get);
}