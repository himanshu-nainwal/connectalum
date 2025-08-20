import express from "express";
import { addMentor } from "../controllers/mentorController.js"; 
import Mentor from "../models/mentorModel.js"; // Use ES module import

const router = express.Router();


router.post("/add", addMentor);

router.get("/mentors", async (req, res) => {
    try {
      console.log("🔍 Fetching mentors from DB..."); // Debugging Log
      const mentors = await Mentor.find();
      console.log("✅ Mentors found:", mentors); // Debugging Log
  
      if (!mentors || mentors.length === 0) {
        return res.status(404).json({ message: "No mentors found" });
      }
      res.json(mentors);
    } catch (error) {
      console.error("❌ Error fetching mentors:", error);
      res.status(500).json({ message: "Server Error" });
    }
  });

export default router;
