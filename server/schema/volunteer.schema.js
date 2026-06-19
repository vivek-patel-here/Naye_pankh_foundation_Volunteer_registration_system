import { body } from "express-validator";
export const volunteerValidation = [
  body('fullname')
    .trim()
    .isString()
    .isLength({ min: 2, max: 50 })
    .withMessage('Full name must be between 2 and 50 characters'),

  body('email')
    .trim()
    .isEmail()
    .withMessage('Valid email is required')
    .normalizeEmail(),

  body('phoneNumber')
    .trim()
    .isMobilePhone('any')
    .withMessage('Valid phone number is required'),

  body('age')
    .isInt({ min: 16, max: 100 })
    .withMessage('Age must be between 16 and 100'),

  body('gender')
    .isIn(['Male', 'Female', 'Other'])
    .withMessage('Invalid gender selected'),

  body('skills')
    .trim()
    .isLength({ min: 3, max: 500 })
    .withMessage('Skills are required'),

  body('availability')
    .isIn([
      'Weekdays',
      'Weekends',
      'Full Time',
      'Part Time',
      'Flexible'
    ])
    .withMessage('Invalid availability option'),

  body('address')
    .trim()
    .isLength({ min: 10, max: 200 })
    .withMessage('Address must be between 10 and 200 characters'),

  body('motivation')
    .trim()
    .isLength({ min: 20, max: 1000 })
    .withMessage('Please provide a valid motivation statement'),

  body('emergencyContact')
    .trim()
    .isMobilePhone('any')
    .withMessage('Valid emergency contact number is required')
];
