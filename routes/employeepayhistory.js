module.exports = app => {
    app.route('/employeepayhistory').get(app.services.employeepayhistory.getAll);
    app.route('/employeepayhistory/:EmployeeID').get(app.services.employeepayhistory.get);
}