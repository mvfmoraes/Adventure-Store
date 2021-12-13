module.exports = app => {
    app.route('/department').get(app.services.department.getAll);
    app.route('/department/:DepartmentID').get(app.services.department.get);
}