const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AnnonceSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "user"
  },
  title: {
    type: String,
    required: true
  },
  typeTravaux: {
    type: String
  },
  category:{
    type: String,
  },
  description: {
    type: String
  },
  date: {
    type: String
  },
});

module.exports = Annonce = mongoose.model("annonce", AnnonceSchema);