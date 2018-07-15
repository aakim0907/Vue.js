const PassportJWT = require('passport-jwt'),
  ExtractJWT = PassportJWT.ExtractJwt,
  Strategy = PassportJWT.Strategy,
  config = require('./index.js'),
  models = require('@BudgetManager/app/setup');

module.exports = (passport) => {
  // instantiate User model
  const User = models.User;
  
  const parameters = {
    secretOrKey: config.secret,
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken()
  };
    
  // get a user by matching the JWT token with the token got from the client
  passport.use(new Strategy(parameters, (payload, done) => {
    User.findOne({ id: payload.id }, (error, user) => {
      if (error) return done(error, false);
      if (user) done(null, user);
      else done(null, false);
    });
  }));
}