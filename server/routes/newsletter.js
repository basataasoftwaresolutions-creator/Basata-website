const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const {
  subscribe,
  applyDiscount,
  checkDiscountEligibility,
  verifyDiscount
} = require("../Controllers/newsletterController");
const auth = require("../middlewares/auth");
const { ValidationErrors } = require("../validation/validate");

// Validate email
const validateEmail = [
  body("email")
    .isEmail()
    .withMessage("Please provide a valid email address")
    .normalizeEmail()
];

// Public route to subscribe
router.post("/subscribe", validateEmail, ValidationErrors, subscribe);

// Protected routes - allow both regular users and Google users
router.post("/apply-discount", auth(["user", "google_user"]), applyDiscount);
router.get("/check-eligibility", auth(["user", "google_user"]), checkDiscountEligibility);

// Verify discount code for public use (e.g. in Contact Form)
router.post("/verify-discount", verifyDiscount);

module.exports = router;