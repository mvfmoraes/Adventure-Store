module.exports = app => {
    app.route('/specialofferproduct').get(app.services.specialofferproduct.getAll);
    app.route('/specialofferproduct/:SpecialOfferID').get(app.services.specialofferproduct.get);
}