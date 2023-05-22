const mongoose = require('mongoose')
// const { ObjectId } = mongoose.Schema

const PostSchema = new mongoose.Schema(
    {
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        nametitle: {
            type: String,
            text: true
        },
        discription: {
            type: String,
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "category",
          },
        images: {
            type: Array,
        }
    },
    {timestamps: true}
);
module.exports = Post = mongoose.model('post',PostSchema);

