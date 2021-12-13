module.exports = app => {
    app.route('/productproductphoto').get(app.services.productproductphoto.getAll);
    app.route('/productproductphoto/:ProductID').get(app.services.productproductphoto.get);
}