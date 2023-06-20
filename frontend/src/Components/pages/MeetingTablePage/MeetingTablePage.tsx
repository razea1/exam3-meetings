import React from "react";
import { SetStateAction, SyntheticEvent, useEffect, useState } from "react";
import "../../pages/MeetingTablePage/MeetingTablePage.css";
import { Meeting } from "../../modal/meeting";
import { MeetingService } from "../../Services/meetingService/meetingService";
import { NavLink } from "react-router-dom";

function MeetingTablePage(): JSX.Element {
  const [meetings, setMeeting] = useState<Meeting[]>([]);

  useEffect(() => {
    MeetingService.GetAllMeeting()
      .then((meetings: SetStateAction<Meeting[]>) => setMeeting(meetings))
      .catch((err: { message: any }) => alert(err.message));
  }, []);

  async function deleteMeeting(meetingID?: number) {
    try {
      if (meetingID === undefined) {
        throw new Error("Invalid meeting ID");
      }
      await MeetingService.deleteMeeting(meetingID);
      alert("Meeting has been deleted!");
      // Rerender the UI or update the state if needed
    } catch (err: any) {
      alert(err.message);
    }
  }

  return (
    <div className="MeetingList">
      <NavLink to="/home" className="button">
        <button>Home</button>
      </NavLink>

      <table>
        <thead>
          <tr>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Description</th>
            <th>Meeting Room</th>
            <th>Dev Group ID</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {meetings.map((b) => (
            <tr key={b.id}>
              <td>{b.start_time ? b.start_time.toString() : "N/A"}</td>
              <td>{b.end_time ? b.end_time.toString() : "N/A"}</td>
              <td>{b.description}</td>
              <td>{b.meeting_room}</td>
              <td>{b.dev_group_id}</td>
              <td>
                <button onClick={() => deleteMeeting(b.id)}>❌</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MeetingTablePage;
