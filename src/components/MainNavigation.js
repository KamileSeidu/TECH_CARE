import snrWoman from "../assets/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png";
import testLogo from "../assets/TestLogo.png";
import settings from "../assets/settings_FILL0_wght300_GRAD0_opsz24.png";
import more_vert from "../assets/more_vert_FILL0_wght300_GRAD0_opsz24.png";
import { NavIcons } from "../data/NavIcons";

import classes from "./General.module.css";
import { NavLink } from "react-router-dom";

function MainNavivagtion() {
  return (
    <>
      <section className={`${classes.box} ${classes["box-1"]}`}>
        <header>
          <img src={testLogo} alt="" />
          <nav className={`${classes["nav-bar"]}`}>
            <ul>
              <li>
                <NavLink
                  to={"overview"}
                  className={({ isActive }) =>
                    [
                      classes.btn,
                      classes["btn--icon"],
                      classes["btn-container"],
                      isActive ? classes.active : undefined,
                    ]
                      .filter(Boolean)
                      .join(" ")
                  }
                >
                  <img src={NavIcons.home} alt="" />
                  Overview
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    [
                      classes.btn,
                      classes["btn--icon"],
                      classes["btn-container"],
                      isActive ? classes.active : undefined,
                    ]
                      .filter(Boolean)
                      .join(" ")
                  }
                  end
                >
                  <img src={NavIcons.group} alt="" />
                  Patients
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={`${classes.btn} ${classes["btn--icon"]} ${classes["btn-container"]}`}
                >
                  <img src={NavIcons.calender} alt="" />
                  Schedule
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={`${classes.btn} ${classes["btn--icon"]} ${classes["btn-container"]}`}
                >
                  <img src={NavIcons.chat} alt="" />
                  Message
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={`${classes.btn} ${classes["btn--icon"]} ${classes["btn-container"]}`}
                >
                  <img src={NavIcons.credit} alt="" />
                  Transactions
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className={classes.profile}>
            <div className={`${classes["profile__details"]}`}>
              <img src={snrWoman} alt="" />
              <span>
                <h1>Dr. Jose Simons</h1>
                <p>General Practioner</p>
              </span>
            </div>
            <div className={`${classes["profile__settings"]}`}>
              <img src={settings} alt="" />
              <img src={more_vert} alt="" />
            </div>
          </div>
        </header>
      </section>
    </>
  );
}

export default MainNavivagtion;
