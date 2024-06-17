import classes from "../components/General.module.css";
import downloadIcon from "../assets/download_FILL0_wght300_GRAD0_opsz24 (1).svg";

function Results({ data, onSelectedName }) {
  const diagnosisResults = data.map((diagData) => {
    return diagData.lab_results;
  });
  let individualData = diagnosisResults[0];
  //   console.log(individualData);

  const index = data.findIndex((patient) => patient.name === onSelectedName);

  if (index !== -1) {
    individualData = diagnosisResults[index];
  }

  const labResults = individualData.map((result, index) => (
    <li key={index}>
      {result} <img src={downloadIcon} alt="donwload-Icon" />
    </li>
  ));

  return (
    <section className={`${classes.box} ${classes["box-6"]}`}>
      <div className={classes.results}>
        <h1>Lab Results</h1>
        <ul>{labResults}</ul>
      </div>
    </section>
  );
}

export default Results;
