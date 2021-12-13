module.exports = app => {
    app.route('/salesterritoryhistory').get(app.services.salesterritoryhistory.getAll);
    app.route('/salesterritoryhistory/:SalesPersonID').get(app.services.salesterritoryhistory.get);
}