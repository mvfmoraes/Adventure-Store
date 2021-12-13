module.exports = app => {
    app.route('/employeedepartmenthistory').get(app.services.employeedepartmenthistory.getAll);
    app.route('/employeedepartmenthistory/:EmployeeID').get(app.services.employeedepartmenthistory.get);
}