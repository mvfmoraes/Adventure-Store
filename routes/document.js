module.exports = app => {
    app.route('/document').get(app.services.document.getAll);
    app.route('/document/:DocumentID').get(app.services.document.get);
}