module.exports = app => {
    app.route('/productcategory').get(app.services.productcategory.getAll);
    app.route('/productcategory/:ProductCategoryID').get(app.services.productcategory.get);
}