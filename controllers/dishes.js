import Dish from "../models/dish.js";

export const getDishes = async (req, res) => {
  try {
    const dishes = await Dish.find();
    res.json(dishes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getDish = async (req, res) => {
  try {
    const { id } = req.params;
    const dish = await Dish.findById(id);
    if (!dish) throw Error("Dish not found");
    res.json(dish);
  } catch (e) {
    console.log(e);
    res.send("Dish not found!");
  }
};

export const createDish = async (req, res) => {
  try {
    const dish = await new Dish(req.body);
    await dish.save();
    res.status(201).json(dish);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const updateDish = async (req, res) => {
  const { id } = req.params;
  const dish = await Dish.findByIdAndUpdate(id, req.body, { new: true });
  res.status(200).json(dish);
};

export const deleteDish = async (req, res) => {
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
};
