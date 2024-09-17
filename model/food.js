const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const imageSchema = new Schema({
  filename: String,
  imgUrl: {
    type: String,
    default:
"https://plus.unsplash.com/premium_photo-1698500035173-fdea60f9294e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
});


const foodSchema=new Schema({
    name:String,
    description:[String],
    city:{ type: String, default: "Unknown" },
    croute:{ type: String, default: "Unknown" },
    image:[imageSchema],
    history:{
        key1:String,
    },
});


foodSchema.pre("save", function (next) {
    // Apply the default URL if imgUrl is empty
    this.image.forEach((img) => {
      if (!img.imgUrl) {
        img.imgUrl =
"https://plus.unsplash.com/premium_photo-1698500035173-fdea60f9294e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      }
    });
    next();
  });
  
  const Food= mongoose.model("Food", foodSchema);
  
  module.exports = Food;
  