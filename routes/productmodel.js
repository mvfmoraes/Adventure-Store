module.exports = app => {
    app.route('/productmodel').get(app.services.productmodel.getAll);
    app.route('/productmodel/:ProductModelID').get(app.services.productmodel.get);
}