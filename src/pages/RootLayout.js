import { Outlet } from "react-router-dom";
import MainNavivagtion from "../components/MainNavigation";
import classes from "../components/General.module.css";

function RootLayoutPage() {
  return (
    <>
      <div
        className={`${classes.container} ${classes.grid} ${classes["grid-3x3"]}`}
      >
        <MainNavivagtion />
        <Outlet />
      </div>
    </>
  );
}

export default RootLayoutPage;
