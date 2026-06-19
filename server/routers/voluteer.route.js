import express from "express";
import mongoose from "mongoose";
import { Volunteer } from "../models/volunteer.model.js";
import { validateSchema } from "../middleware/validate-schema.js";
import { volunteerValidation } from "../schema/volunteer.schema.js";

const router = express.Router();

/**
 * @POST Register Volunteer
 */
router.post(
  "/register",
  volunteerValidation,
  validateSchema,
  async (req, res) => {
    try {
      const volunteer = await Volunteer.create(req.body);

      return res.status(201).json({
        success: true,
        message: "Volunteer registered successfully",
        data: volunteer,
      });
    } catch (error) {
      if (error.code === 11000) {
        return res.status(409).json({
          success: false,
          message: "Email already exists",
        });
      }
      console.log(error);

      return res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  }
);

/**
 * @Get All Volunteers
 */
router.get("/all", async (req, res) => {
  try {
    const [volunteers, approved, rejected, pending] = await Promise.all([
      Volunteer.find().sort({ createdAt: -1 }),
      Volunteer.countDocuments({ status: "Approved" }),
      Volunteer.countDocuments({ status: "Rejected" }),
      Volunteer.countDocuments({ status: "Pending" }),
    ]);


    return res.status(200).json({
      success: true,
      data: volunteers,
      rejected,
      approved,
      pending

    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

/**
 * @Get Volunteer By Id
 */
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid volunteer id",
      });
    }

    const volunteer = await Volunteer.findById(id);

    if (!volunteer) {
      return res.status(404).json({
        success: false,
        message: "Volunteer not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: volunteer,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});




/**
 * @Update Volunteer
 */
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid volunteer id",
      });
    }

    const updatedVolunteer = await Volunteer.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedVolunteer) {
      return res.status(404).json({
        success: false,
        message: "Volunteer not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Volunteer updated successfully",
      data: updatedVolunteer,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});



/**
 * @Delete Volunteer
 */
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid volunteer id",
      });
    }

    const deletedVolunteer = await Volunteer.findByIdAndDelete(id);

    if (!deletedVolunteer) {
      return res.status(404).json({
        success: false,
        message: "Volunteer not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Volunteer deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

export default router;