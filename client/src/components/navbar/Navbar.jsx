import "./navbar.css";
import {
  faBars,
  faChevronDown,
  faChevronLeft,
  faEye,
  faGears,
  faMagnifyingGlass,
  faRightFromBracket,
  faUser,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Navbar = () => {
  const [showDataCollection, setShowDataCollection] = useState(false);

  const handleDataCollectionClick = () => {
    setShowDataCollection(!showDataCollection);
  };
  return (
    <div className="navbar">
      <div className="search">
        <FontAwesomeIcon className="left" icon={faChevronLeft} />
        <div className="searchBar">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input type="search" />
        </div>
      </div>
      <div className="catalog">
        <div class="choicebox">
          <label for="monitoring">
            <div className="choice">
              <FontAwesomeIcon icon={faEye} />
              Monitoring
            </div>
            <FontAwesomeIcon icon={faChevronDown} />
          </label>
        </div>
        <div class="choicebox">
          <label for="service">
            <div className="choice">
              <FontAwesomeIcon icon={faGears} />
              Services
            </div>
            <FontAwesomeIcon icon={faChevronDown} />
          </label>
        </div>
        <span class="choicebox" onClick={handleDataCollectionClick}>
          <label for="dataCollection" >
            <div className="choice">
              <FontAwesomeIcon icon={faBars} />
              Data collection
            </div>
            <FontAwesomeIcon icon={faChevronDown} />
          </label>
        </span>
        {showDataCollection && (
          <div className="dataCollectionOptions">
            <label className="choicebox" htmlFor="templateGroups">
              Template groups
            </label>
            <label className="choicebox" htmlFor="hostGroups">
              Host groups
            </label>
            <label className="choicebox" htmlFor="templates">
              Templates
            </label>
            <label className="choicebox" htmlFor="hosts">
              Hosts
            </label>
          </div>
        )}
        <div class="choicebox">
          <label for="Administration">
            <div className="choice">
              <FontAwesomeIcon icon={faWrench} />
              Administration
            </div>
            <FontAwesomeIcon icon={faChevronDown} />
          </label>
        </div>
      </div>
      <div className="setting">
        <div className="userSetting choicebox">
          <FontAwesomeIcon icon={faUser} />
          User Setting
        </div>
        <div className="signOut choicebox">
          <FontAwesomeIcon icon={faRightFromBracket} />
          Sign Out
        </div>
      </div>
    </div>
  );
};

export default Navbar;
