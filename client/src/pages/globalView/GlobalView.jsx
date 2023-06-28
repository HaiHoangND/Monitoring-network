import { faBars, faMaximize } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../../components/navbar/Navbar";
import "./globalView.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const GlobalView = () => {
  return (
    <div className="globalViewContainer">
      <Navbar />
      <div className="content">
        <div className="header">
          <h3>Global View</h3>
          <div className="dashboard">
            <h3>Edit dashboard</h3>
            <FontAwesomeIcon icon={faBars} />
            <FontAwesomeIcon icon={faMaximize} />
          </div>
        </div>
        <div className="systemInformation">
          <h3 className="system">System Information</h3>
          <table>
            <thead>
              <tr>
                <th>Parameter</th>
                <th>Value</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Parameter 1</td>
                <td>Value 1</td>
                <td>Details 1</td>
              </tr>
              <tr>
                <td>Parameter 2</td>
                <td>Value 2</td>
                <td>Details 2</td>
              </tr>
              <tr>
                <td>Parameter 3</td>
                <td>Value 3</td>
                <td>Details 3</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="hostAndProblem">
          <div className="hostAvailability">
            <h3 className="system">Host availability</h3>
            <div className="level">
              <div className="box">Available</div>
              <div className="box">Not available</div>
              <div className="box">Unknown</div>
              <div className="box">Total</div>
            </div>
          </div>
          <div className="hostAvailability">
            <h3 className="system">Problems by serverity</h3>
            <div className="level">
              <div className="box1">Disaster</div>
              <div className="box1">High</div>
              <div className="box1">Average</div>
              <div className="box1">Warning</div>
              <div className="box1">Information</div>
              <div className="box1">Not classified</div>
            </div>
          </div>
        </div>
        <div className="problems">
          <h3 className="system">Problems</h3>
          <table>
            <thead>
              <tr>
                <th>Time</th>
                <th>Info</th>
                <th>Host</th>
                <th>Problem Severity</th>
                <th>Duration</th>
                <th>Update</th>
                <th>Actions</th>
                <th>Tags</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Time 1</td>
                <td>Info 1</td>
                <td>Host 1</td>
                <td>Problem Severity 1</td>
                <td>Duration 1</td>
                <td>Update 1</td>
                <td>Actions 1</td>
                <td>Tags 1</td>
              </tr>
              <tr>
                <td>Time 2</td>
                <td>Info 2</td>
                <td>Host 2</td>
                <td>Problem Severity 2</td>
                <td>Duration 2</td>
                <td>Update 2</td>
                <td>Actions 2</td>
                <td>Tags 2</td>
              </tr>
              <tr>
                <td>Time 3</td>
                <td>Info 3</td>
                <td>Host 3</td>
                <td>Problem Severity 3</td>
                <td>Duration 3</td>
                <td>Update 3</td>
                <td>Actions 3</td>
                <td>Tags 3</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default GlobalView;
