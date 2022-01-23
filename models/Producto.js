import mongoose from "mongoose";

const ProductoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Por favor ingrese un título."],
  },
  price: {
    type: String,
    required: [true, "Por favor ingrese un precio."],
  },
  description: {
    type: String,
    required: [true, "Por favor ingrese una descripción."],
  },
  ref: {
    type: String,
    required: [true, "Por favor ingrese un referencia."],
  },
  imgURL: {
    type: String,
    required: [false, "Por favor ingrese un imagen."],
  },
});

export default mongoose.models.Producto ||
  mongoose.model("Producto", ProductoSchema);
