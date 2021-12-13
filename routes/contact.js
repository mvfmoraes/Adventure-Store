module.exports = app => {
    app.route('/contact').get(app.services.contact.getAll);
    app.route('/contact/:ContactID').get(app.services.contact.get);
}