module.exports = app => {
    app.route('/salespersonquotahistory').get(app.services.salespersonquotahistory.getAll);
    app.route('/salespersonquotahistory/:SalesPersonID').get(app.services.salespersonquotahistory.get);
}