import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },

    description: {
      type: String,
      required: true,
      trim: true,
      maxlength: 2000,
    },

    location: {
      type: String,
      required: true,
      trim: true,
      maxlength: 200,
    },

    date: {
      type: Date,
      required: true,
    },

    volunteersNeeded: {
      type: Number,
      required: true,
      min: 1,
    },
    image: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      enum: ["Open", "Closed", "Completed", "Cancelled"],
      default: "Open",
    },
  },
  {
    timestamps: true,
  }
);

export const Event =
  mongoose.models.Event ||
  mongoose.model("Event", eventSchema);