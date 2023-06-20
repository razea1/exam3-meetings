import { OkPacket } from "mysql";
import dal from "../utils/dal";
import { Meeting } from "../models/meeting_model";
import DevGroup from "../models/deVgroupModel";

async function getAllMeetings(): Promise<Meeting[]> {
  try {
    const sql = "SELECT * FROM meeting";
    const meetings = await dal.execute(sql);
    return meetings;
  } catch (error) {
    console.error("Error fetching all meetings:", error);
    throw error;
  }
}

async function getAllTable(): Promise<DevGroup[]> {
  try {
    const sql = "SELECT * FROM company.dev_group;";
    const DGroup = await dal.execute(sql);
    return DGroup;
  } catch (error) {
    console.error("Error fetching all meetings:", error);
    throw error;
  }
}

async function addMetting(meeting: Meeting): Promise<Meeting> {
  const sql = `INSERT INTO meeting VALUES(
        DEFAULT,
        ${meeting.dev_group_id},
        '${meeting.start_time}',
        '${meeting.end_time}',
        '${meeting.description}',
        '${meeting.meeting_room}'
    );`;
    console.log(sql);
  const result: OkPacket = await dal.execute(sql);
  meeting.id = result.insertId;
  return meeting;
  
}

async function deleteMeeting(meetingID: number): Promise<void> {
  const sql = `DELETE FROM meeting WHERE id = ${meetingID}`;
  const result: OkPacket = await dal.execute(sql);
}

export default {
  getAllMeetings,
  getAllTable,
  deleteMeeting,
  addMetting,
};
