module.exports = app => {
    app.route('/unitmeasure').get(app.services.unitmeasure.getAll);
    app.route('/unitmeasure/:UnitMeasureCode').get(app.services.unitmeasure.get);
}