module.exports = app => {
    app.route('/billofmaterials').get(app.services.billofmaterials.getAll);
    app.route('/billofmaterials/:BillOfMaterialsID').get(app.services.billofmaterials.get);
}