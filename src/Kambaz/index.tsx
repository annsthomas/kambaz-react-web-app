import { Routes, Route, Link,Navigate } from "react-router-dom";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KambazNavigation from "./Navigation";
import Courses from "./Courses";

export default function Kambaz() {
  return (
    <div id="wd-kambaz">
      <table>
        <tbody>
          <tr>
            <td valign="top">
              <KambazNavigation />
            </td>
            <td valign="top">
              <Link to="/Labs">Go to Lab Exercises</Link>
              <Routes>
                <Route path="/" element={<Navigate to="/Kambaz/Account" />} />
                <Route path="/Account/*" element={<Account />} />
                <Route path="/Dashboard" element={<Dashboard />} />
                <Route path="Courses/:cid/*" element={<Courses />} />
              </Routes>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
