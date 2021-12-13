module.exports = app => {
    app.route('/employeeaddress').get(app.services.employeeaddress.getAll);
    app.route('/employeeaddress/:EmployeeID').get(app.services.employeeaddress.get);
}