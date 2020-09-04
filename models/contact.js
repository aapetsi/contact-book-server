const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  phone2: {
    type: Number,
  },
  phone3: {
    type: Number,
  },
  email: {
    type: String,
    required: true,
  },
  email2: {
    type: String,
  },
  email3: {
    type: String,
  },
  twitter: {
    type: String,
  },
})

module.exports = mongoose.model('contact', contactSchema)
