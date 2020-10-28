const mongoose = require('mongoose');

// Definovanie Password schemy podla mongoose dokumentacie
const passwordSchema = new mongoose.Schema({
  password: {
    type: String,
    required: true,
  },
});

mongoose.model('Password', passwordSchema);
