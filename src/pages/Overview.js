import Pagecontent from "../components/PageContent";
import { Link } from "react-router-dom";

function OverviewPage() {
  return (
    <>
      <Pagecontent title={"Welcome Doctor"}>
        <p>{`Click on the button below to view patients information `}</p>
        <Link to="/">Patients</Link>
      </Pagecontent>
    </>
  );
}

export default OverviewPage;
