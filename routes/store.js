module.exports = app => {
    app.route('/store').get(app.services.store.getAll);
    app.route('/store/:CustomerID').get(app.services.store.get);
}