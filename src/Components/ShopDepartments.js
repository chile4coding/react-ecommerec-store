import Departments from "./Departments";
import classes from "./ShopDepartments.module.css";
import { useDispatch, useSelector } from "react-redux";
import { sideBarActions } from "../Store/store";

const ShopDepartments = (props) => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.bar.data);

  const handleSearch = () => {
   
    dispatch(sideBarActions.handleFilter(props.item));
  };

  return (
    <div >
      <a className={classes.anchor} onClick={handleSearch}>{props.item}</a>
    </div>
  );
};

export default ShopDepartments;
