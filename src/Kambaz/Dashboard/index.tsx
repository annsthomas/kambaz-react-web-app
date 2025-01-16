export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2>Published Courses (7)</h2>
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <img src="/images/course1.svg" alt="Course 1" width="200" />
          <h5>React Basics</h5>
          <p>Learn React from scratch.</p>
          <button>Go</button>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/course2.png" alt="Course 2" width="200" />
          <h5>Advanced React</h5>
          <p>Master React components.</p>
          <button>Go</button>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/course3.png" alt="Course 3" width="200" />
          <h5>Backend Development</h5>
          <p>Node.js and Express basics.</p>
          <button>Go</button>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/course4.jpg" alt="Course 4" width="200" />
          <h5>Database Essentials</h5>
          <p>Master SQL and database design.</p>
          <button>Go</button>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/course5.jpg" alt="Course 5" width="200" />
          <h5>JavaScript Mastery</h5>
          <p>Advanced JavaScript concepts.</p>
          <button>Go</button>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/course6.jpg" alt="Course 6" width="200" />
          <h5>CSS Animations</h5>
          <p>Create dynamic web experiences.</p>
          <button>Go</button>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/course7.png" alt="Course 7" width="200" />
          <h5>Full-Stack Development</h5>
          <p>Combine frontend and backend skills.</p>
          <button>Go</button>
        </div>
      </div>
    </div>
  );
}
