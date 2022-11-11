
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import classes from "./SearchBar.module.css"
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import {useRef} from "react"
import { sideBarActions } from '../Store/store';
import {useDispatch} from "react-redux"

function SearchBar() {
//   const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
const itemSearchInputRef = useRef("")
const dispatch = useDispatch()



const handleSearchFilter =(e)=>{
  e.preventDefault()
  const enteredItem = itemSearchInputRef.current.value

  dispatch(sideBarActions.handleSearchFilter(enteredItem))

  itemSearchInputRef.current.value = ""
}


  return (
    <Row>
       <Col  xs={12} md={2} >

    <Nav variant='pill' activeKey="1"  >
        <NavDropdown style={{color:"green"}} title="All Category" id="nav-dropdown border" className={classes.change}>
        <NavDropdown.Item eventKey="4.2">vegetable</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Fresh Meat</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.4">Oranges</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.4">Fastfood</NavDropdown.Item>
      </NavDropdown>
      </Nav>

       </Col>
       <Col xs={12} md={10}>
     
   
       
            <form className={classes["form-display"]} onSubmit={handleSearchFilter}>
         
        <input type="text" placeholder="What do you need?" className={classes.input} ref={itemSearchInputRef} />

    

      <button variant="success" type="submit" className={classes.button}>
        Search
      </button>
      </form>

    
     
      
 
    </Col>
     </Row>
  );
}

export default SearchBar;