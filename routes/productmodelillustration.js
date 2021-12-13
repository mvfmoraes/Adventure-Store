module.exports = app => {
    app.route('/productmodelillustration').get(app.services.productmodelillustration.getAll);
    app.route('/productmodelillustration/:ProductModelID').get(app.services.productmodelillustration.get);
}