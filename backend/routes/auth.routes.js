const { verifySignUp } = require("../middleware");
const middleware = require("../middleware")
const controller = require("../controllers/auth.controllers");
const post = require("../controllers/post.controllers")
module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.post(
        "/api/auth/signup", [
        // verifySignUp.checkDuplicateUsernameOrEmail,
        // verifySignUp.checkRolesExisted
    ], controller.signup
    );
    app.post("/api/auth/signin", controller.signin);
    // app.post("/api/auth/post", middleware.authJwt.createapost)
};
