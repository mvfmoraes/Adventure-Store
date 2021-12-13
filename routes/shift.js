module.exports = app => {
    app.route('/shift').get(app.services.shift.getAll);
    app.route('/shift/:ShiftID').get(app.services.shift.get);
}