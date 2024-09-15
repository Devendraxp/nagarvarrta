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

const stateSchema=new Schema({
    name:String,
    phrase:String,
    geometry: {
      type: {
        type: String, 
        enum: ['Point'], 
        required: true
      },
      coordinates: {
        type: [Number],
        required: true
      }
    },
    history:{
      war:String,
      ecto:String,
      artH:String,
      },
      image:[imageSchema],
      speciality:[String],
      route:String,
      HnC:{
        MnD: String,
        attire: String,
        festivals: [String],
        folkTales : [String],
        FnF : [String],
        lifeStyle: [String],
      },
});


stateSchema.pre("save", function (next) {
  // Apply the default URL if imgUrl is empty
  this.image.forEach((img) => {
    if (!img.imgUrl) {
      img.imgUrl =
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60";
    }
  });
  next();
});

const State = mongoose.model("State", stateSchema);
module.exports=State;