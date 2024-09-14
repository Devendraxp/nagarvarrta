const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const imageSchema = new Schema({
  filename: String,
  imgUrl: {
    type: String,
    default:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
});

const placeSchema=new Schema({
    name:String,
    description:String,
    city:String,
    croute:String,
    geocoordinate:String,
    image:[imageSchema],
    history:{
        key1:String,
    },
});

placeSchema.pre("save", function (next) {
    // Apply the default URL if imgUrl is empty
    this.image.forEach((img) => {
      if (!img.imgUrl) {
        img.imgUrl =
          "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60";
      }
    });
    next();
  });
  
  const Place= mongoose.model("Place", placeSchema);
  
  module.exports = Place;
  