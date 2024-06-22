import classes from "../components/General.module.css";

function Pagecontent({ title, children }) {
  return (
    <section className={`${classes["page-content"]}`}>
      <h1>{title}</h1>
      {children}
    </section>
  );
}

export default Pagecontent;
