const mongoose = require("mongoose");
const initdata = require("../city/data.js");
const initdata1 = require("./datafood.js");
const initdata2 = require("./dataplace.js");
const City = require("../../model/city.js");
const Food = require("../../model/food.js");
const Place = require("../../model/place.js");

main()
  .then(() => {
    console.log("Connected to DATABASE");
  })
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://devxp:JROEyDcV8QG2gyNb@cluster0.yvysw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
};

const initDB = async () => {
  // await Place.insertMany(initdata2.data2); 
  await Food.insertMany(initdata1.data1);
  console.log("Data was initialized");

};

initDB();
