module.exports = app => {
    app.route('/productdescription').get(app.services.productdescription.getAll);
    app.route('/productdescription/:ProductDescriptionID').get(app.services.productdescription.get);
}