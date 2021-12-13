module.exports = app => {
    app.route('/databaselog').get(app.services.databaselog.getAll);
    app.route('/databaselog/:DatabaseLogID').get(app.services.databaselog.get);
}