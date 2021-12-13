module.exports = app => {
    app.route('/countryregioncurrency').get(app.services.countryregioncurrency.getAll);
    app.route('/countryregioncurrency/:CountryRegionCode').get(app.services.countryregioncurrency.get);
}