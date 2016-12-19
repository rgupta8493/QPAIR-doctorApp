var mongoose = require('mongoose');

var TodoSchema = new mongoose.Schema({
  name: { type: String, trim: true },
  reason: { type: String, trim: true },
  app_date: { type: Date},
  app_time: { type: String},
  created: { type: Date, default: Date.now }
});

mongoose.model('Todo', TodoSchema);
// ProductSchema.path('name').required(true, "Name field is required");