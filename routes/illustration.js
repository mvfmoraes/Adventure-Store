module.exports = app => {
    app.route('/illustration').get(app.services.illustration.getAll);
    app.route('/illustration/:IllustrationID').get(app.services.illustration.get);
}