module.exports = app => {
    app.route('/jobcandidate').get(app.services.jobcandidate.getAll);
    app.route('/jobcandidate/:JobCandidateID').get(app.services.jobcandidate.get);
}