import classes from "../components/General.module.css";
import searchIcon from "../assets/search_FILL0_wght300_GRAD0_opsz24.svg";
import moreIcon from "../assets/more_horiz_FILL0_wght300_GRAD0_opsz24.svg";
import { useState } from "react";

function PatientsList({ data, onSelect }) {
  const [patientName, setPatientName] = useState(data[0].name);
  onSelect(patientName);
  const selectPatient = (name) => {
    setPatientName(name);
    // console.log(name);
  };
  const patientList = data.map((patientData, index) => (
    <li
      onClick={() => selectPatient(patientData.name)}
      key={index}
      className={`${classes.patients} ${
        patientData.name === patientName ? classes.active : ""
      }`}
    >
      <div className={classes.patient}>
        <div className={`${classes["profile__details"]}`}>
          <img src={patientData.profile_picture} alt="Patient" />
          <span>
            <h1>{patientData.name}</h1>
            <p>
              {patientData.gender},{patientData.age}
            </p>
          </span>
        </div>
        <img src={moreIcon} alt="more Icon" />
      </div>
    </li>
  ));

  return (
    <section className={`${classes.box} ${classes["box-2"]}`}>
      <div className={`${classes["patients-list"]}`}>
        <div className={classes.search}>
          <h1>Patients</h1>
          <img src={searchIcon} alt="search Icon" />
        </div>
        <div className={classes.scroll}>
          <ul>{patientList}</ul>
        </div>
      </div>
    </section>
  );
}

export default PatientsList;
