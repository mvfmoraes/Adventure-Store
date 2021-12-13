module.exports = app => {
    app.route('/salesterritory').get(app.services.salesterritory.getAll);
    app.route('/salesterritory/:TerritoryID').get(app.services.salesterritory.get);
}