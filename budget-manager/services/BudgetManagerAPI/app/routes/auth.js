const models = require('@BudgetManager/app/setup');

// pass in the app to set routes
module.exports = (app) => {
  const api = app.BudgetManagerAPI.app.api.auth;

  app.route('/')
    .get((req, res) => res.send('Budget Manager API'));

  app.route('/api/v1/auth')
    .post(api.login(models.User))
}