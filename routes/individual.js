module.exports = app => {
    app.route('/individual').get(app.services.individual.getAll);
    app.route('/individual/:CustomerID').get(app.services.individual.get);
}