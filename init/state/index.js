const mongoose=require("mongoose");
const initdata=require("./data.js");
const State=require("../../model/state.js");

main()
.then(()=>{
    console.log("connected to DATABASE");
})
.catch(err => console.log(err));


async function main() {
    await mongoose.connect('mongodb+srv://devxp:JROEyDcV8QG2gyNb@cluster0.yvysw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
};

const initDB=async()=>{
    await State.deleteMany({});
    console.log("Data was initialized");
    await State.insertMany(initdata.data);
};


initDB();