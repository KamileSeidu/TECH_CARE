import classes from "../components/General.module.css";
import LineGraph from "./Line";
import { diaIcons } from "../data/DiaIcons";
import { useState } from "react";

function Graph({ data, onSelectedName }) {
  const index = data.findIndex(
    (individual) => individual.name === onSelectedName
  );

  let individualData = data[0];
  if (index !== -1) {
    individualData = data[index];
  }
  const diagnosis_history = individualData.diagnosis_history;

  const allLabels = diagnosis_history.map(
    (entry) => `${entry.month.slice(0, 3)},${entry.year}`
  );

  const labels = allLabels.slice(0, 5);

  const graphData = {
    systolic: diagnosis_history.map(
      (entry) => entry.blood_pressure.systolic.value
    ),
    diastolic: diagnosis_history.map(
      (entry) => entry.blood_pressure.diastolic.value
    ),
  };

  const [systolic, setSystolic] = useState(graphData.systolic[0]);
  const [diastolic, setDiastolic] = useState(graphData.diastolic[0]);

  const handleDataClicked = (data) => {
    if (data.label === "Systolic") {
      setSystolic(data.value);
    } else {
      setDiastolic(data.value);
    }
  };

  let sysLevels = "normal";
  if (systolic > 140) {
    sysLevels = "Higher than average";
  } else if (systolic < 90) {
    sysLevels = "Lower than average";
  }
  let diaLevels = "normal";
  if (diastolic > 90) {
    diaLevels = "Higher than average";
  } else if (diastolic < 60) {
    diaLevels = "Lower than average";
  }

  let isDiaNormal = diastolic >= 60 && diastolic <= 90;
  let isDiaHigher = diastolic > 90;
  let isDaiLower = diastolic < 60;
  let isSysNormal = systolic >= 90 && systolic <= 140;
  let isSysHigher = systolic > 140;
  let isSysLower = systolic < 90;

  return (
    <div className={`${classes["card-2"]}`}>
      <div className={classes.graph}>
        <h1>Blood Pressure</h1>
        <div className={`${classes["graph__design"]}`}>
          <LineGraph
            onDataClicked={handleDataClicked}
            labels={labels}
            data={graphData}
          />
        </div>
      </div>
      <div className={`${classes["graph__side-note"]}`}>
        <div className={`${classes["graph__side-note__item"]}`}>
          <span className={`${classes["side-note__heading"]}`}>
            <div className={`${classes.dot} ${classes["dot--1"]}`}></div>
            <h1>Systolic</h1>
          </span>
          <h2>{`${systolic} bpm`}</h2>
          <p>
            <img
              src={diaIcons.downArrow}
              className={`${isSysHigher && classes["arrow__up"]} ${
                isSysNormal && classes["arrow__left"]
              } ${isSysLower && classes["arrow__down "]}`}
              alt="arrow-up"
            />
            {sysLevels}
          </p>
        </div>
        <div>
          <span className={`${classes["side-note__heading"]}`}>
            <div className={`${classes.dot} ${classes["dot--2"]}`}></div>
            <h1>Diastolic</h1>
          </span>
          <h2>{`${diastolic} bpm`}</h2>
          <p>
            <img
              src={diaIcons.downArrow}
              alt="arrow-down"
              className={` ${isDaiLower && classes["arrow__down"]} ${
                isDiaHigher && classes["arrow__up"]
              } ${isDiaNormal && classes["arrow__left"]}`}
            />
            {diaLevels}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Graph;
