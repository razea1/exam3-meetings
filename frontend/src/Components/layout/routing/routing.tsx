import { Navigate, Route, Routes } from 'react-router-dom';
import AddMeetingPage from '../../pages/AddMeetingPage/AddMeetingPage';
import MeetingTablePage from '../../pages/MeetingTablePage/MeetingTablePage';
import Page404 from '../../pages/page404/page404';
import MainLayout from '../MainLayout/MainLayout';
import Menu from '../menu';

import './routing.css';

function Routing(): JSX.Element {
  return (
    <div className="routing">
      <Routes>
        <Route path="/home" element={<Menu />} />
        <Route path="/addNewMeeting" element={<AddMeetingPage />} />
        <Route path="/MeetingTablePage" element={<MeetingTablePage />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default Routing;


