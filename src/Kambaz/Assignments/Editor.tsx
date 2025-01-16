export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
           
            
            <table border={2} width="200%">
            <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-name">Assignment Name</label>
                    </td>
                    <td>
                        <input id="wd-name" value="A1 - ENV + HTML" />
                    </td>
            </tr>
            <tr>
            <td align="right" valign="top">
            <label htmlFor="wd-description">Description</label>
            </td>
            <td>
            <textarea id="wd-description">
                The assignment is available online. Submit a link to the landing page of
                your web application running on Netlify. The landing page should include:
                - Your full name and section
                - Link to run the application
                - Links to all relevant repositories
            </textarea>
            </td>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value={100} />
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-group">Assignment Group</label>
                    </td>
                    <td>
                        <select id="wd-group">
                            <option>ASSIGNMENTS</option>
                            <option>QUIZZES</option>
                            <option>EXAMS</option>
                            <option>PROJECT</option>
                        </select>
                    </td>
                </tr>
               
            </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade-as">Display Grade As</label>
                    </td>
                    <td>
                        <select id="wd-display-grade-as">
                            <option>Percentage</option>
                            <option>Complete/Incomplete</option>
                            <option>Points</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type">Submission Type</label>
                    </td>
                    <td>
                        <select id="wd-submission-type">
                            <option>Online</option>
                            <option>On Paper</option>
                            <option>No Submission</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">Online Entry Options</td>
                    <td>
                        <input id="wd-text-entry" type="checkbox" /> Text Entry<br />
                        <input id="wd-website-url" type="checkbox" /> Website URL<br />
                        <input id="wd-media-recordings" type="checkbox" /> Media Recordings<br />
                        <input id="wd-student-annotation" type="checkbox" /> Student Annotation<br />
                        <input id="wd-file-upload" type="checkbox" /> File Uploads<br />
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-assign-to">Assign To</label>
                    </td>
                    <td>
                        <input id="wd-assign-to" value="Everyone" />
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-due-date">Due</label>
                    </td>
                    <td>
                        <input id="wd-due-date" value="05/13/2024" />
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-available-from">Available From</label>
                    </td>
                    <td>
                        <input id="wd-available-from" value="05/06/2024" />
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-available-until">Until</label>
                    </td>
                    <td>
                        <input id="wd-available-until" value="05/20/2024" />
                    </td>
                </tr>
            </table>
            <br />
            <br />
            <button id="wd-cancel">Cancel</button>
            <button id="wd-save">Save</button>
        </div>
    );
}
