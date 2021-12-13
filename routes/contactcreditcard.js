module.exports = app => {
    app.route('/contactcreditcard').get(app.services.contactcreditcard.getAll);
    app.route('/contactcreditcard/:ContactID').get(app.services.contactcreditcard.get);
}