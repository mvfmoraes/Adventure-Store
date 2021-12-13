module.exports = app => {
    app.route('/workorderrouting').get(app.services.workorderrouting.getAll);
    app.route('/workorderrouting/:WorkOrderID').get(app.services.workorderrouting.get);
}