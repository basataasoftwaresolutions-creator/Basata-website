// models/Contact.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, lowercase: true },
  country: { type: String },
  timeline: { type: String },
  budget: { type: String },
  description: { type: String, required: true },
  discountCode: { type: String },
  paymentMethod: { type: String },
  phoneNumber: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Contact = mongoose.model("Contact", ContactSchema);

module.exports = Contact;