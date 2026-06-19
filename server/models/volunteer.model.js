import mongoose from "mongoose";

const volunteerSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 50,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      unique: true,
    },

    phoneNumber: {
      type: String,
      required: true,
      trim: true,
    },

    age: {
      type: Number,
      required: true,
      min: 16,
      max: 100,
    },

    gender: {
      type: String,
      required: true,
      enum: ["Male", "Female", "Other"],
    },

    skills: {
      type: [String],
      required: true,
      validate: {
        validator: (arr) => arr.length > 0,
        message: "At least one skill is required",
      },
    },

    availability: {
      type: String,
      required: true,
      enum: [
        "Weekdays",
        "Weekends",
        "Full Time",
        "Part Time",
        "Flexible",
      ],
    },

    address: {
      type: String,
      required: true,
      trim: true,
      maxlength: 200,
    },

    motivation: {
      type: String,
      required: true,
      trim: true,
      minlength: 20,
      maxlength: 1000,
    },

    emergencyContact: {
      type: String,
      required: true,
      trim: true,
    },
    status:{
      type:String,
      required:true,
      enum: [
        "Pending",
        "Rejected",
        "Approved",
      ],
      default:"Pending"
    }
  },
  {
    timestamps: true,
  }
);

export const Volunteer = mongoose.model("Volunteer", volunteerSchema);
 