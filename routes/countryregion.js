module.exports = app => {
    app.route('/countryregion').get(app.services.countryregion.getAll);
    app.route('/countryregion/:CountryRegionCode').get(app.services.countryregion.get);
}