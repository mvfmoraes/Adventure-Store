module.exports = app => {
    app.route('/productsubcategory').get(app.services.productsubcategory.getAll);
    app.route('/productsubcategory/:ProductSubcategoryID').get(app.services.productsubcategory.get);
}