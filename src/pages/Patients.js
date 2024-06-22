import PatientsList from "../components/PatientsList";
import History from "../components/History";
import { Suspense, useState } from "react";
import PatientProfile from "../components/PatientProfile";
import Results from "../components/Results";
import Diagnosis from "../components/Diagnosis";
import { json, useLoaderData, defer, Await } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";

function PatientsPage() {
  const { data } = useLoaderData();

  const [selectedPatientName, setSelectedPatientName] = useState();
  const selectedPatient = (name) => {
    setSelectedPatientName(name);
  };
  return (
    <>
      <Suspense fallback={<LoadingSpinner />}>
        <Await resolve={data}>
          {(loadedPatients) => (
            <>
              <PatientsList
                onSelectedName={selectedPatientName}
                onSelect={selectedPatient}
                data={loadedPatients}
              />
              <History
                onSelectedName={selectedPatientName}
                data={loadedPatients}
              />
              <PatientProfile
                onSelectedName={selectedPatientName}
                data={loadedPatients}
              />
              <Diagnosis
                onSelectedName={selectedPatientName}
                data={loadedPatients}
              />
              <Results
                onSelectedName={selectedPatientName}
                data={loadedPatients}
              />
            </>
          )}
        </Await>
      </Suspense>
    </>
  );
}
export default PatientsPage;

const apiUsername = process.env.REACT_APP_API_USERNAME;
const apiPassword = process.env.REACT_APP_API_PASSWORD;

let auth = btoa(`${apiUsername}:${apiPassword}`);

async function loadPatients() {
  const response = await fetch(
    "https://fedskillstest.coalitiontechnologies.workers.dev",
    { headers: { Authorization: `Basic ${auth}` } }
  );

  if (!response.ok) {
    throw json({ message: "" }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData;
  }
}
export function loader() {
  return defer({
    data: loadPatients(),
  });
}
