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

const stateSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  phrase: {
    type: String,
    required: true,
  },
  geometry: {
    type: {
      type: String,
      default: "Point",
      enum: ["Point"],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
  history: {
    war: {
      type: [String],
      required: true,
    },
    ecto: {
      type: String,
      required: true,
    },
    artH: {
      type: String,
      required: true,
    },
  },
  image: [imageSchema],
  speciality: {
    type: [String],
    required: true,
  },
  route: {
    type: String,
    required: true,
  },
  HnC: {
    MnD: {
      type: [String],
      required: true,
    },
    attire: {
      type: String,
      required: true,
    },
    festivals: {
      type: [String],
      required: true,
    },
    folkTales: {
      type: [String],
      required: true,
    },
    FnF: {
      type: [String],
      required: true,
    },
    lifeStyle: {
      type: [String],
      required: true,
    },
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
module.exports = State;
