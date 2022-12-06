const { authJwt } = require("../middleware"); 
const controller = require("../controllers/user.controllers");
const postControllers = require("../controllers/post.controllers");
module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers", "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
    app.post("/api/post", [authJwt.verifyToken, authJwt.isPractitioner], postControllers.createapost);
    app.get("/api/post", postControllers.findAll);
    app.put("/api/post/:id", [authJwt.verifyToken, authJwt.isPractitioner], postControllers.update);
    app.delete("/api/post/:id", [authJwt.verifyToken, authJwt.isPractitioner], postControllers.deleteOne);
};