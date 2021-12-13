module.exports = app => {
    app.route('/productdocument').get(app.services.productdocument.getAll);
    app.route('/productdocument/:ProductID').get(app.services.productdocument.get);
}