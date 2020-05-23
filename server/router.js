const Authentication = require("./controllers/authentication");
const passportService = require("./services/passport");
const passport = require("passport");

// Create requireAuth object to intercept any incoming requests
// to a protected route
const requireAuth = passport.authenticate("jwt", { session: false });

//
const requireSignIn = passport.authenticate("local", { session: false });

module.exports = function (app) {
  app.post("/signin", requireSignIn, Authentication.signin);
  app.post("/signup", Authentication.signup);
};