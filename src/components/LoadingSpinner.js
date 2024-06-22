import classes from "../components/General.module.css";
function LoadingSpinner() {
  return (
    <>
      <span className={`${classes.loader} ${classes["loader__center"]}`}></span>
    </>
  );
}

export default LoadingSpinner;
