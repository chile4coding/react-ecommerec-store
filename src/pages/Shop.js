import DisplayShop from "../Components/DisplayShop";
import Price from "../Components/Price";
import ShopItem from "../Components/ShopItem";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";
import { useSelector, useDispatch } from "react-redux";
import ShopHeader from "../Components/ShopHeader";
import SearchBar from "../Components/SearchBar";
import Pagination from "../Components/Pagination";
import { sideBarActions } from "../Store/store";
import classes from "./Shop.module.css"
import { useEffect } from "react";
const Shop = () => {


  const dispatch = useDispatch()


  useEffect(()=>{
const loadDATA =  ()=>{

  dispatch(sideBarActions.onLoadDATA())
}

loadDATA()


  },[])

  const selector = useSelector((state) => state.bar.data);


  const pageSelector = useSelector((state) => state.bar.page);

  let numberOfPages = 4;
  let itemsPerPage = 3;
  const items = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * itemsPerPage;
    return selector.slice(start, start + itemsPerPage);
  });




  let itemsD;

  if (selector.length === 0) {
    itemsD = <h3 className="text-center">No item is is found</h3>;
  }





  const shopItemDisp = items[pageSelector].map((item) => (
    <Col xsm={3} sm={3} md={3} className={`${classes["shop-items__display"]} border m-3`}>
      <ShopItem
        img={item.img}
        key={item.id}
        id={item.id}
        name={item.name}
        category={item.category}
        price={item.price}
      />
    </Col>
  ));

const pages = items.map((item, i)=>{
  return<Pagination key={i}  page={i}/>
})

const handleNextPaging = ()=>{
  dispatch(sideBarActions.handlePageByNext())

}
const handlePreviousPaging = ()=>{
dispatch(sideBarActions.handlePageByPrevious())
}

  return (
    <div style={{marginBottom: "2rem"}}>
      <Container className={classes.viewport}>
        <Row>
          <Col md={12}>
            <ShopHeader />
          </Col>
        </Row>

        <Row className="mt-5 ">
          <Col  md={3} className="">
        <DisplayShop />
        <Price />
          
          </Col>
          <Col  md={9}>
          <Row >
          <SearchBar/>
          </Row>


        
          <Row className=" mb-5">

        
          
        

        {selector.length > 0 && shopItemDisp}
          {selector.length < 1 && itemsD}
   

          </Row>

          <div className={classes["pages"]}>
           {pageSelector>0 &&<button className={classes["page-number"]} onClick={handlePreviousPaging}>previous</button>}
          {pages}

          { pageSelector < items.length -1 && <button className={classes["page-number"]} onClick={handleNextPaging}>next</button>}

          </div>



         
    
         
          
          </Col>
        </Row>
       
      </Container>
    </div>
  );
};

export default Shop;
