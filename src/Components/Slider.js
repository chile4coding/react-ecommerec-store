import Carousel from "react-bootstrap/Carousel";
import { useNavigate } from "react-router-dom";
import classes from "./Slider.module.css";

function Slider(props) {
  const navigate = useNavigate()

  const handleDetails = ()=>{

    navigate("/shop")
  }


  
  return (
    <Carousel>
      <Carousel.Item>
        <div className={classes.imgwidth} >
          <img
            className="d-block w-100 img-fluid"
            src={props.img1}
            alt="First slide"
          />
        
        </div>
        <Carousel.Caption>
          <h4  className={`${classes.color} bg-success mt-0 p-2 text-white`} onClick={handleDetails}>Fresh Meat </h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className={classes.imgwidth}>
          <img
            className="d-block w-100 img-fluid"
            src={props.img2}
            alt="Second slide"
          />
         
        </div>
        <Carousel.Caption>
          <h4 className={`${classes.color} bg-success mt-0 p-2 text-white`} onClick={handleDetails}>Drinks </h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className={classes.imgwidth}>
          <img
            className="d-block w-100 img-fluid"
            src={props.img3}
            alt="Third slide"
          />
          
        </div>
        <Carousel.Caption>
          <h4 className={`${classes.color} bg-success mt-0 p-2 text-white`} onClick={handleDetails}>Vegetable </h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className={classes.imgwidth}>
          <img
            className="d-block w-100 img-fluid"
            src={props.img4}
            alt="Third slide"
          />
        </div>
        <Carousel.Caption>
          <h4 className={`${classes.color} bg-success mt-0 p-2 text-white`} onClick={handleDetails}>Fastfood </h4>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
