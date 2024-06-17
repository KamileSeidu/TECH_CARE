import classes from "../components/General.module.css";
import { profileIcons } from "../data/profileIcons";

function PatientProfile({ data, onSelectedName }) {
  let individualData = data[0];
  const index = data.findIndex((patient) => patient.name === onSelectedName);

  if (index !== -1) {
    individualData = data[index];
  }

  const isFemale = individualData.gender === "Female";

  return (
    <section className={`${classes.box} ${classes["box-4"]}`}>
      <div className={`${classes["individual-profile"]}`}>
        <div className={`${classes["individual-profile__header"]}`}>
          <img src={individualData.profile_picture} alt="" />
          <h1>{individualData.name}</h1>
        </div>
        <div className={classes.info}>
          <span className={classes.icon}>
            <img src={profileIcons.calender} alt="" />
          </span>
          <div className={`${classes["birth-date"]}`}>
            <h1>Date of Birth</h1>
            <p>{individualData.date_of_birth}</p>
          </div>
        </div>
        <div className={classes.info}>
          <span className={classes.icon}>
            <img
              src={isFemale ? profileIcons.femaleIcon : profileIcons.maleIcon}
              alt=""
            />
          </span>
          <div className={`${classes["birth-date"]}`}>
            <h1>Gender</h1>
            <p>{individualData.gender}</p>
          </div>
        </div>
        <div className={classes.info}>
          <span className={classes.icon}>
            <img src={profileIcons.phoneIcon} alt="" />
          </span>
          <div className={`${classes["birth-date"]}`}>
            <h1>Contact Info.</h1>
            <p>{individualData.phone_number}</p>
          </div>
        </div>
        <div className={classes.info}>
          <span className={classes.icon}>
            <img src={profileIcons.phoneIcon} alt="" />
          </span>
          <div className={`${classes["birth-date"]}`}>
            <h1>Emergency Contacts</h1>
            <p>{individualData.emergency_contact}</p>
          </div>
        </div>
        <div className={classes.info}>
          <span className={classes.icon}>
            <img src={profileIcons.issuaranceIcon} alt="" />
          </span>
          <div className={`${classes["birth-date"]}`}>
            <h1>Insurance Provider</h1>
            <p>{individualData.insurance_type}</p>
          </div>
        </div>
        <button className={`${classes.btn} ${classes["btn--primary"]}`}>
          Show All Information
        </button>
      </div>
    </section>
  );
}

export default PatientProfile;
