module.exports = app => {
    app.route('/salesperson').get(app.services.salesperson.getAll);
    app.route('/salesperson/:SalesPersonID').get(app.services.salesperson.get);
}