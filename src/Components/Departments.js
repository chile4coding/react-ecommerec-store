import classes from "./Departments.module.css"

const Departments = (props) => {
  return (
    <div>
      <p className={classes.dept}>{props.departments}</p>
    </div>
  );
};

export default Departments;
