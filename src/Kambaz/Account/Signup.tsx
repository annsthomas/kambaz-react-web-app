import { Link } from "react-router-dom";
export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <br />
      <br />
      <br />
      <h3>Sign up</h3>
      <input placeholder="username" className="wd-username" /><br />
      <input placeholder="password" type="password" className="wd-password" /><br />
      <input placeholder="verify password" type="password" className="wd-password-verify" /><br />
      <Link to="/Kambaz/Account/Signin" id="wd-signin-link">Sign in</Link><br />
      <Link to="/Kambaz/Account/Signup" id="wd-signup-btn">Sign up</Link>
    </div>
  );
}
