import express, { NextFunction, Request, Response } from "express";
import logic from "../logic/logic";
import { Meeting } from "../../BackEnd/models/meeting_model";

const router = express.Router();

// GET http://localhost:3001/api/genres
router.get("/api/meeting", async (request: Request, response: Response, next: NextFunction) => {
  try {
    const meetings = await logic.getAllMeetings();
    response.json(meetings);
  } catch (err: any) {
    next(err);
  }
});

// GET http://localhost:3001/api/books
router.get("/api/DevGroup", async (request: Request, response: Response, next: NextFunction) => {
  try {
    const DGroup = await logic.getAllTable();
    response.json(DGroup);
  } catch (err: any) {
    next(err);
  }
});

// POST http://localhost:3001/api/books
router.post("/api/meeting", async (request: Request, response: Response, next: NextFunction) => {
  try {
    const meeting = request.body;
    const addedmeeting = await logic.addMetting(meeting);
    response.status(201).json(addedmeeting);
  } catch (err: any) {
    next(err);
  }
});

// DELETE http://localhost:3001/api/books/:bookId
router.delete("/api/meeting/:meetingID", async (request: Request, response: Response, next: NextFunction) => {
  try {
    const meetingID = +request.params.meetingID;
    await logic.deleteMeeting(meetingID);
    response.sendStatus(204);
  } catch (err: any) {
    next(err);
  }
});

export default router;
