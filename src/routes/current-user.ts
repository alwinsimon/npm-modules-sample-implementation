import express from "express";
import { currentUser } from "@bookmyseat/common";

const router = express.Router();

router.get("/api/v1/currentuser", currentUser, (req, res) => {
  res.send({ currentUser: req.currentUser || null });
});

export { router as currentUserRouter };
