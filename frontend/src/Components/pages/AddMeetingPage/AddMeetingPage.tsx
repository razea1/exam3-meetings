import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import DevGroup from "../../modal/DevGroup";
import { MeetingService } from "../../Services/meetingService/meetingService";
import "./AddMeetingPage.css";
import { useForm } from "react-hook-form";
import { Meeting } from "../../modal/meeting";

function AddMeetingPage(): JSX.Element {
  const [devGroups, setDevGroups] = useState<DevGroup[]>([]);
  const [meetings, setMeetings] = useState<Meeting[]>([]);
  const { register, handleSubmit } = useForm<Meeting>();
  const navigate = useNavigate();

  useEffect(() => {
    MeetingService.getAllDevGroups()
      .then((devGroups) => setDevGroups(devGroups))
      .catch((err) => alert(err.message));

    MeetingService.GetAllMeeting()
      .then((meetings) => setMeetings(meetings))
      .catch((err) => alert(err.message));
  }, []);

  async function send(meeting: Meeting) {
    try {
      await MeetingService.addMeeting(meeting);
      alert("meeting has been added.");
      navigate("/MeetingTablePage");
    } catch (err: any) {
      alert(err.nessage);
    }
  }
  return (
    <div className="AddMeetingPage">
      <NavLink to="/home" className="button">
        <button>Home</button>
      </NavLink>
      <br />
      <form onSubmit={handleSubmit(send)}>
        <h2>add meeting:</h2>

        <label>group name:</label>
        <select defaultValue="" {...register("dev_group_id")}>
          <option disabled value="">
            select team
          </option>

          {devGroups.map((g) => (
            <option key={g.id} value={g.id}>
              {g.name}
            </option>
          ))}
        </select>

        <label>meeting room:</label>
        <select defaultValue="" {...register("meeting_room")}>
          <option disabled value="">
            select room
          </option>
          <option>whale room</option>
          <option>blue room</option>
          <option>board room</option>
          <option>news room</option>
          ))
        </select>

        <label>start time:</label>
        <input type="date" {...register("start_time")} />

        <label>end time:</label>
        <input type="date" {...register("end_time")} />

        <label>description:</label>
        <input type="text" {...register("description")} />

        <button type="submit">add meeting</button>
      </form>
    </div>
  );
}

export default AddMeetingPage;
