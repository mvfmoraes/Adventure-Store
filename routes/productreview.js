module.exports = app => {
    app.route('/productreview').get(app.services.productreview.getAll);
    app.route('/productreview/:ProductReviewID').get(app.services.productreview.get);
}