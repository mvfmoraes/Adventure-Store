module.exports = app => {
    app.route('/culture').get(app.services.culture.getAll);
    app.route('/culture/:CultureID').get(app.services.culture.get);
}