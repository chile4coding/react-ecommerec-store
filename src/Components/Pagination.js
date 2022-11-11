import { useDispatch, useSelector } from "react-redux";
import { sideBarActions } from "../Store/store";

import classes from "./Pagination.module.css"

const Pagination = (props)=>{
const dispatch = useDispatch()
const pageSelector = useSelector(state=>state.bar.page)

    const handlePage = ()=>{
        dispatch(sideBarActions.handlePageByNumber(props.page))
       
    }


    const style = {
        backgroundColor: pageSelector === props.page ? "green" : "",
        color: pageSelector === props.page ? "white" : ""
    }


    return <div className={classes["page-number"]}>
        <button className={classes.pages} onClick={handlePage} style={style}>{props.page}</button>
    </div>
}



export default Pagination