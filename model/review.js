const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5,},
    review: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
        // required: true,
    },

    });