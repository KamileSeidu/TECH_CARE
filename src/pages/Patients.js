import PatientsList from "../components/PatientsList";
import History from "../components/History";
import { healthData as data } from "../data/data";
import { useState } from "react";
import PatientProfile from "../components/PatientProfile";
import Results from "../components/Results";
import Diagnosis from "../components/Diagnosis";

function PatientsPage() {
  const [selectedPatientName, setSelectedPatientName] = useState("");
  const selectedPatient = (name) => {
    setSelectedPatientName(name);
  };
  return (
    <>
      <PatientsList onSelect={selectedPatient} data={data} />
      <History onSelectedName={selectedPatientName} data={data} />
      <PatientProfile onSelectedName={selectedPatientName} data={data} />
      <Diagnosis onSelectedName={selectedPatientName} data={data} />
      <Results onSelectedName={selectedPatientName} data={data} />
    </>
  );
}

export default PatientsPage;
