import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Dish = new Schema(
  {
    name: { type: String, required: true },
    restaurant: { type: String, required: true },
    img_url: { type: String, required: true },
    restaurant_url: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    keywords: { type: Array, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("dishes", Dish);
