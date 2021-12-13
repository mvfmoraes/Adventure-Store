module.exports = app => {
    app.route('/awbuildversion').get(app.services.awbuildversion.getAll);
    app.route('/awbuildversion/:SystemInformationID').get(app.services.awbuildversion.get);
}