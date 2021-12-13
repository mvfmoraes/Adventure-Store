module.exports = app => {
    app.route('/contacttype').get(app.services.contacttype.getAll);
    app.route('/contacttype/:ContactTypeID').get(app.services.contacttype.get);
}