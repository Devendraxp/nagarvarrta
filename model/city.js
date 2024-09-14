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

const citySchema = new Schema({
  name: String,
  description: String,
  state: String,
  route: String,
  croute:String,
  geocoordinates: String,
  images: [imageSchema],
  history:{
    key1:String,
    key2:String,
    key3:String,
    key4:String,
    key5:String,
  },
});

citySchema.pre("save", function (next) {
  this.images.forEach((img) => {
    if (!img.imgUrl) {
      img.imgUrl = "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60";
    }
  });
  next();
});


const City= mongoose.model("City", citySchema);

module.exports = City;