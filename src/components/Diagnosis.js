import classes from "../components/General.module.css";

function Diagnosis({ data, onSelectedName }) {
  const diagnosisList = data.map((diagData) => {
    return diagData.diagnostic_list;
  });

  let individualData = diagnosisList[0];

  const index = data.findIndex((patient) => patient.name === onSelectedName);

  if (index !== -1) {
    individualData = diagnosisList[index];
  }

  const DiaList = individualData.map((data, index) => (
    <li key={index}>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <h3>{data.status}</h3>
    </li>
  ));

  return (
    <section className={`${classes.box} ${classes["box-5"]}`}>
      <div className={classes.diagnostic}>
        <h1>Diagnostic List</h1>
        <div className={`${classes["diagnostic__headings"]}`}>
          <h2>Problem / Diagnostic</h2>
          <h2>Description</h2>
          <h2>Status</h2>
        </div>
        <div className={`${classes["diagnostic__list"]}`}>
          <ul>{DiaList}</ul>
        </div>
      </div>
    </section>
  );
}

export default Diagnosis;
