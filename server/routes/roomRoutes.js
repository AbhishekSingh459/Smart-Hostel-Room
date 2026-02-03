import express from "express";
import Room from "../models/Room.js";

const router = express.Router();

// Add Room
router.post("/rooms", async (req, res) => {
  try {
    const room = await Room.create(req.body);
    res.status(201).json(room);
  } catch {
    res.status(400).json({ message: "Room already exists" });
  }
});

// View All Rooms
router.get("/rooms", async (req, res) => {
  const rooms = await Room.find();
  res.json(rooms);
});

// Allocate Room
router.post("/allocate", async (req, res) => {
  const { students, needsAC, needsWashroom } = req.body;

  const rooms = await Room.find({
    isAllocated: false,
    capacity: { $gte: students },
    hasAC: needsAC,
    hasAttachedWashroom: needsWashroom
  }).sort({ capacity: 1 });

  if (rooms.length === 0) {
    return res.json({ message: "No room available" });
  }

  const allocatedRoom = rooms[0];
  allocatedRoom.isAllocated = true;
  await allocatedRoom.save();

  res.json(allocatedRoom);
});

export default router;
