module.exports = app => {
    app.route('/stateprovince').get(app.services.stateprovince.getAll);
    app.route('/stateprovince/:StateProvinceID').get(app.services.stateprovince.get);
}