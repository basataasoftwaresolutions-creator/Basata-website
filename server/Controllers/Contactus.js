// Controllers/contactController.js
const Contact = require("../models/Contactus");
const Subscriber = require("../models/Subscriber");

// Submit contact form
const submitContactForm = async (req, res) => {
  try {
    const { 
      firstName, 
      lastName, 
      email, 
      country, 
      timeline, 
      budget, 
      description, 
      discountCode, 
      paymentMethod, 
      phoneNumber 
    } = req.body;
    
    const newContact = new Contact({
      firstName,
      lastName,
      email,
      country,
      timeline,
      budget,
      description,
      discountCode,
      paymentMethod,
      phoneNumber
    });
    
    await newContact.save();

    // Check if BASATA15 discount was used and mark it if so
    if (discountCode && discountCode.toUpperCase() === "BASATA15") {
      const subscriber = await Subscriber.findOne({ email: email.toLowerCase() });
      if (subscriber && !subscriber.discountUsed) {
        subscriber.discountUsed = true;
        await subscriber.save();
      }
    }
    
    res.status(201).json({ 
      success: true, 
      message: "Your message has been sent successfully. We'll get back to you soon!",
      contact: newContact
    });
  } catch (error) {
    console.error("Error submitting contact form:", error);
    res.status(500).json({ 
      success: false, 
      message: "Failed to submit your message. Please try again later." 
    });
  }
};

// Get all contact submissions (admin only)
const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ schedule: 1 }); 
    res.status(200).json({ success: true, contacts });
  } catch (error) {
    console.error("Error fetching contacts:", error);
    res.status(500).json({ 
      success: false, 
      message: "Failed to fetch contact submissions." 
    });
  }
};

module.exports = {
  submitContactForm,
  getAllContacts
};