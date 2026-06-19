import { body } from "express-validator";

export const eventValidation = [
  body("title")
    .trim()
    .notEmpty()
    .withMessage("Title is required")
    .isLength({ min: 3, max: 100 })
    .withMessage("Title must be between 3 and 100 characters"),

  body("description")
    .trim()
    .notEmpty()
    .withMessage("Description is required")
    .isLength({ min: 10, max: 2000 })
    .withMessage("Description must be between 10 and 2000 characters"),

  body("location")
    .trim()
    .notEmpty()
    .withMessage("Location is required")
    .isLength({ min: 3, max: 200 })
    .withMessage("Location must be between 3 and 200 characters"),

  body("date")
    .notEmpty()
    .withMessage("Date is required")
    .isISO8601()
    .withMessage("Invalid date format")
    .toDate(),

  body("volunteersNeeded")
    .notEmpty()
    .withMessage("Volunteers needed is required")
    .isInt({ min: 1 })
    .withMessage("Volunteers needed must be greater than 0")
    .toInt(),

  body("image")
    .trim()
    .notEmpty()
    .withMessage("Image URL is required")
    .isURL()
    .withMessage("Invalid image URL"),

  body("status")
    .optional()
    .isIn(["Open", "Closed", "Completed", "Cancelled"])
    .withMessage("Invalid event status"),
];