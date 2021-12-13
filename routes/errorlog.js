module.exports = app => {
    app.route('/errorlog').get(app.services.errorlog.getAll);
    app.route('/errorlog/:ErrorLogID').get(app.services.errorlog.get);
}