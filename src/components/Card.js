import classes from "../components/General.module.css";

function Card({ children }) {
  return (
    <div className={`${classes.box} ${classes.card} ${classes["box-3"]}`}>
      {" "}
      {children}{" "}
    </div>
  );
}

export default Card;
