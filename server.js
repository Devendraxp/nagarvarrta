const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const City = require("./model/city.js");
const State = require("./model/state.js");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

const port = 3000;

mongoose
  .connect(
    "mongodb+srv://devxp:JROEyDcV8QG2gyNb@cluster0.yvysw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB: ", error);
  });

// routesphrase
//home page
app.get("/", async (req, res) => {
  const stateList = await State.find({});
  res.render("home/index.ejs", { stateList });
});

//add new state
app.get("/new",(req,res)=>{
  res.render("home/new.ejs");
});

app.post("/", async (req, res) => {
  const state = new State ({ ...req.body.state});
  console.log(state);
  await state.save();
  res.redirect("/");
});


//city index page
app.get("/:route", async (req, res) => {
  try {
    const route = req.params.route;
    const citiesList = await City.find({ route: route });
    res.render("cities/index.ejs", { route, citiesList });
  } catch (error) {
    console.error("Error fetching cities:", error);
    res.status(500).send("Error fetching cities");
  }
});

//new city
app.get("/:route/new", (req, res) => {
  const route = req.params.route;
  res.render("cities/new.ejs", { route });
});

app.post("/:route", async (req, res) => {
  const route = req.params.route;
  const city = new City ({ route: route, ...req.body.city});
  console.log(city);
  await city.save();
  res.redirect(`/${route}`);
});


//directs to specific city
app.get("/:route/:id", async (req, res) => {
  const route = req.params.route;
  const id = req.params.id;
  try {
    const city = await City.findById(id);
    res.render("cities/show.ejs", { city });
  } catch (error) {
    res.status(400).send("Invalid ID format");
  }
});

app.listen(port, () => {
  console.log(`Server started at ${port}`);
});
