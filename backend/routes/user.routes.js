const { authJwt } = require("../middleware"); 
const controller = require("../controllers/user.controllers");
const postControllers = require("../controllers/post.controllers");
const { isPractitioner } = require("../middleware/authJwt");
module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers", "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
    app.get("/api/test/all", controller.allAccess);
    app.get("/api/test/user", [authJwt.verifyToken], controller.userBoard);
    app.get("/api/test/mod", [authJwt.verifyToken, authJwt.isPractitioner], controller.practitionerBoard);
    app.get("/api/test/admin", [authJwt.verifyToken, authJwt.isAdmin], controller.adminBoard);
    app.put("/api/practitioner/:id", [authJwt.verifyToken], controller.update);
    app.put("/api/patient/:id", [authJwt.verifyToken], controller.update);
    app.get("/api/users", controller.findAll)

    
    // app.get("/api/find/profession", controller.findOne)
    // app.get("/api/find/:profession", controller.findAllProfession)
    // app.post("/api/create/post", [authJwt.verifyToken, authJwt.isPractitioner], postControllers.createapost)
};