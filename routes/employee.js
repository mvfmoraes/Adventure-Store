module.exports = app => {
    app.route('/employee').get(app.services.employee.getAll);
    app.route('/employee/:EmployeeID').get(app.services.employee.get);
}