module.exports = app => {
    app.route('/specialoffer').get(app.services.specialoffer.getAll);
    app.route('/specialoffer/:SpecialOfferID').get(app.services.specialoffer.get);
}