import classes from "../components/General.module.css";
import { diaIcons } from "../data/DiaIcons";
import Card from "./Card";
import Graph from "./Graph";

function History({ data, onSelectedName }) {
  const diagnosisHistory = data.map((diagData) => {
    return diagData.diagnosis_history;
  });

  let individualData = diagnosisHistory[0][0];

  const index = data.findIndex((patient) => patient.name === onSelectedName);

  if (index !== -1) {
    individualData = diagnosisHistory[index][0];
  }

  const { heart_rate, respiratory_rate, temperature } = individualData;

  let isNormal;
  if (heart_rate.value >= 80) {
    isNormal = true;
  }

  return (
    <Card>
      <div className={classes["Diagnosis-history"]}>
        <h1>Diagnosis History</h1>
        <Graph data={data} onSelectedName={onSelectedName} />
        <div className={`${classes["Diagnosis-history__cards"]}`}>
          <div className={classes["respiratory-card"]}>
            <img src={diaIcons.respiratory} alt="respiratory" />
            <h1>Respiratory rate</h1>
            <h2>{`${respiratory_rate.value} bpm`}</h2>
            <p>{respiratory_rate.levels}</p>
          </div>
          <div className={`${classes["temperature-card"]}`}>
            <img src={diaIcons.temperature} alt="temperature-icon" />
            <h1>Temperature</h1>
            <h2>{`${temperature.value} F`}</h2>
            <p>{temperature.levels}</p>
          </div>
          <div className={`${classes["heart-rate-card"]}`}>
            <img src={diaIcons.heart} alt="heart-icon" />
            <h1>Heart Rate</h1>
            <h2>{`${heart_rate.value} bpm`}</h2>
            <p>
              <img
                src={diaIcons.downArrow}
                alt="arrow-down"
                className={`${isNormal ? classes["arrow__left"] : ""} ${
                  !isNormal ? classes.down : ""
                }`}
              />
              {heart_rate.levels}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default History;
