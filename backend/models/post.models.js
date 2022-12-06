// const { default: mongoose } = require("mongoose");
module.exports = mongoose => {
    var posts = mongoose.Schema({
        userId: String,
        userName: String,
        userImage: String,
        profession: String,
        content: {
            text: String,
            image: String,
        },
    }, {timestamps: true});
    posts.method("toJSON", function() {
        const {__v, _id, ...object} = this.toObject();
        object.id = _id;
        return object;
    });
    const Post = mongoose.model("posts", posts)
    return Post;
}