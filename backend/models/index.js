const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.user = require("./user.models")(mongoose)
db.posts = require("../models/post.models")(mongoose);
db.role = require("./role.models");
db.ROLES = ["patient", "admin", "practitioner"];

module.exports = db;
