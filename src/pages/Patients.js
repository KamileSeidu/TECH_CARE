import PatientsList from "../components/PatientsList";
import History from "../components/History";
import { useState } from "react";
import PatientProfile from "../components/PatientProfile";
import Results from "../components/Results";
import Diagnosis from "../components/Diagnosis";
import { json, useLoaderData } from "react-router-dom";

function PatientsPage() {
  const data = useLoaderData();
  const [selectedPatientName, setSelectedPatientName] = useState(data[0].name);
  const selectedPatient = (name) => {
    setSelectedPatientName(name);
  };
  return (
    <>
      <PatientsList
        onSelectedName={selectedPatientName}
        onSelect={selectedPatient}
        data={data}
      />
      <History onSelectedName={selectedPatientName} data={data} />
      <PatientProfile onSelectedName={selectedPatientName} data={data} />
      <Diagnosis onSelectedName={selectedPatientName} data={data} />
      <Results onSelectedName={selectedPatientName} data={data} />
    </>
  );
}
export default PatientsPage;

const apiUsername = process.env.REACT_APP_API_USERNAME;
const apiPassword = process.env.REACT_APP_API_PASSWORD;

let auth = btoa(`${apiUsername}:${apiPassword}`);
export async function loader() {
  const response = await fetch(
    "https://fedskillstest.coalitiontechnologies.workers.dev",
    { headers: { Authorization: `Basic ${auth}` } }
  );

  if (!response.ok) {
    throw json({ message: "" }, { status: 500 });
  } else {
    return response;
  }
}
