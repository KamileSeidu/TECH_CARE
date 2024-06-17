// import { useEffect } from "react";
import { healthData } from "..data/data";

function Test() {
  const diagnosis_history = healthData.map((history) => {
    return history.diagnosis_history;
  });

  console.log(diagnosis_history);

  return (
    <>
      <p>Just Render Something !</p>
    </>
  );
}

export default Test;
