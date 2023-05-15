const mongoose = require('mongoose')
// const { ObjectId } = mongoose.Schema

const VideoSchema = new mongoose.Schema(
    {
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        nametitle: {
            type: String,
        },
        video: {
            type: String,
        },
    },
    {timestamps: true}
);
module.exports = Video = mongoose.model('video',VideoSchema);

