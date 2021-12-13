module.exports = app => {
    app.route('/location').get(app.services.location.getAll);
    app.route('/location/:LocationID').get(app.services.location.get);
}