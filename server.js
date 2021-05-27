import express from "express";
import logger from "morgan";

const PORT = process.env.PORT || 3000;

import db from "./db/connection.js";
import Dish from "./models/dish.js";

const app = express();

app.use(express.json());
app.use(logger("dev"));

db.on("connected", () => {
  console.log("Connected to MongoDB!");
  app.listen(PORT, () =>
    console.log(`Express server application is running on port ${PORT}`)
  );
});

app.get("/", (req, res) => res.send("This is root!"));

app.get("/dishes", async (req, res) => {
  try {
    const dishes = await Dish.find();
    res.json(dishes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/dishes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const dish = await Dish.findById(id);
    if (!dish) throw Error("Dish not found");
    res.json(dish);
  } catch (e) {
    console.log(e);
    res.send("Dish not found!");
  }
});

app.post("/dishes", async (req, res) => {
  try {
    const dish = new Dish(req.body);
    await dish.save();
    res.status(201).json(dish);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

app.put("/dishes/:id", async (req, res) => {
  const { id } = req.params;
  const dish = await Dish.findByIdAndUpdate(id, req.body, { new: true });
  res.status(200).json(dish);
});

app.delete("/dishes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Dish.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("Dish deleted");
    }
    throw new Error("Dish not found");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
