module.exports = app => {
    app.route('/workorder').get(app.services.workorder.getAll);
    app.route('/workorder/:WorkOrderID').get(app.services.workorder.get);
}