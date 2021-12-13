module.exports = app => {
    app.route('/productphoto').get(app.services.productphoto.getAll);
    app.route('/productphoto/:ProductPhotoID').get(app.services.productphoto.get);
}