import Col from "react-bootstrap/esm/Col"
import Row from "react-bootstrap/esm/Row"

const Receipt = (props)=>{

    return <Row >
    <Col md={6}>
    
      <p>{props.name}</p>
     
    </Col>
    <Col md={6}>
      
      <p>₦{props.total}</p>
    </Col>
  </Row>
}

export default Receipt