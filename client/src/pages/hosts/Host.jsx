import Navbar from "../../components/navbar/Navbar";
import "./hosts.css";

const Host = () => {
  return (
    <div className="hostContainer">
      <Navbar />
      <div className="content">
        <div className="header">
          <h3>Hosts</h3>
          <div className="createHost">
            <h3>Create host</h3>
            <h3>Import</h3>
          </div>
        </div>
        <div className="data">
          <div className="information">
            <div className="information1">
              <div className="information11">
                <div className="name">
                  <label htmlFor="">Host groups</label>
                  <input className="template" type="search" placeholder="Type here to search" />
                </div>
                <div className="name">
                  <label htmlFor="">Templates</label>
                  <input className="template" type="search" placeholder="Type here to search" />
                </div>
                <div className="name">
                  <label htmlFor="">Name</label>
                  <input type="text" />
                </div>
                <div className="name">
                  <label htmlFor="">DNS</label>
                  <input type="text" />
                </div>
                <div className="name">
                  <label htmlFor="">IP</label>
                  <input type="text" />
                </div>
                <div className="name">
                  <label htmlFor="">Port</label>
                  <input type="text" />
                </div>
              </div>
              <div className="button">
                <button>Select</button>
                <button>Select</button>
              </div>
            </div>
            <div className="information2">
              <div className="status">
                <label htmlFor="">Status</label>
                <div className="anyDisable">
                  <div className="anyDisable1">Any</div>
                  <div className="anyDisable1">Enable</div>
                  <div className="anyDisable1">Disable</div>
                </div>
              </div>
              <div className="status">
                <label htmlFor="">Monitored by</label>
                <div className="anyDisable">
                  <div className="anyDisable1">Any</div>
                  <div className="anyDisable1">Enable</div>
                  <div className="anyDisable1">Disable</div>
                </div>
              </div>
              <div className="tags">
                <label htmlFor="">Tags</label>
                <div className="anyOr">
                  <div className="anyDisable1">Any/Or</div>
                  <div className="anyDisable1">Or</div>
                </div>
              </div>
              <div className="tagContain">
                <input type="text" placeholder="tag" />
                <select id="filter" name="filter">
                  <option value="contains">Contains</option>
                  <option value="example1">Example 1</option>
                  <option value="example2">Example 2</option>
                  <option value="example3">Example 3</option>
                </select>
                <input type="text" placeholder="value" />
                <h3 className="remove">Remove</h3>
              </div>
              <h3 className="add">Add</h3>
            </div>
          </div>
          <div className="confirm">
            <button>Apply</button>
            <button>Reset</button>
          </div>
        </div>
        <div className="table">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Items</th>
                <th>Triggers</th>
                <th>Discovery</th>
                <th>Web</th>
                <th>Interface</th>
                <th>Proxy</th>
                <th>Templates</th>
                <th>Status</th>
                <th>Availability</th>
                <th>Agent Encryption</th>
                <th>Info</th>
                <th>Tags</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Example Name</td>
                <td>Example Items</td>
                <td>Example Triggers</td>
                <td>Example Discovery</td>
                <td>Example Web</td>
                <td>Example Interface</td>
                <td>Example Proxy</td>
                <td>Example Templates</td>
                <td>Example Status</td>
                <td>Example Availability</td>
                <td>Example Agent Encryption</td>
                <td>Example Info</td>
                <td>Example Tags</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Host;
