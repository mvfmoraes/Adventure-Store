module.exports = app => {
    app.route('/productmodelproductdescriptionculture').get(app.services.productmodelproductdescriptionculture.getAll);
    app.route('/productmodelproductdescriptionculture/:ProductModelID').get(app.services.productmodelproductdescriptionculture.get);
}