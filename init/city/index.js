const mongoose=require("mongoose");
const initdata=require("./data.js");
const initdata1=require("../foodplace/datafood.js");
const Cities=require("../../model/city.js");
const Food=require("../../model/food.js");
const place=require("../../model/place.js")

main()
.then(()=>{
    console.log("connected to DATABASE");
})
.catch(err => console.log(err));


async function main() {
    await mongoose.connect('mongodb+srv://devxp:JROEyDcV8QG2gyNb@cluster0.yvysw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
};

const initDB=async()=>{
    await Cities.deleteMany({});
    console.log("Data was initialized");
    await Cities.insertMany(initdata.data);
};


initDB();




