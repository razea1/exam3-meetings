import axios from "axios";
import DevGroup from "../../modal/DevGroup";
import appConfig from "../../Utils/Config/Config";
import { Meeting } from "../../modal/meeting";
import "../../Services/meetingService/meetingService.css";

export class MeetingService {
  // static deleteMeeting(meetingId: number) {
  //     throw new Error("Method not implemented.");
  // }
  // static GetAllMeeting() {
  //     throw new Error("Method not implemented.");
  // }

  public static async GetAllMeeting() {
    const response = await axios.get<Meeting[]>(appConfig.meetingUrl);
    const meetings = response.data;
    return meetings;
  }

  public static async getAllDevGroups() {
    const response = await axios.get<DevGroup[]>(appConfig.DevGroupUrl);
    const DGroup = response.data;
    return DGroup;
  }

  public static async addMeeting(meeting: Meeting) {
    const response = await axios.post<Meeting>(appConfig.meetingUrl, meeting);
    const addedMeeting = response.data;
    return addedMeeting;
    // If we have Redux, we shall send addedBook via dispatch
  }

  public static async deleteMeeting(meetingId: number): Promise<void> {
    await axios.delete(appConfig.meetingUrl + meetingId);
  }
}
