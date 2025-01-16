import { Link } from "react-router-dom";

export default function KambazNavigation() {
  return (
    <div id="wd-kambaz-navigation">
      <Link to="/Kambaz/Account">Account</Link>
      <br />
      <Link to="/Kambaz/Dashboard">Dashboard</Link>
      <br />
      <Link to="/Kambaz/Courses/1234">Courses</Link>
      <br />
      <Link to="/Kambaz/Calendar">Calendar</Link>
      <br />
      <Link to="/Kambaz/Inbox">Inbox</Link>
    </div>
  );
}
