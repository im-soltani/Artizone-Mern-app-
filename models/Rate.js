const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RateSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "user"
  },
  profile: {
    type: Schema.Types.ObjectId,
    ref: "profile"
  },
  rating: {
    type: Number,
    
  },
})

module.exports = Rate = mongoose.model("rate", RateSchema);