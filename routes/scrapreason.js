module.exports = app => {
    app.route('/scrapreason').get(app.services.scrapreason.getAll);
    app.route('/scrapreason/:ScrapReasonID').get(app.services.scrapreason.get);
}