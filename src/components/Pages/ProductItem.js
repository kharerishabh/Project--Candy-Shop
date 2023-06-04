import { Card, Button, ListGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { chocolateAction } from "../../store/choco-slice";

const ProductItem = (props) => {
    const dispacth = useDispatch()
    const add1CandyHandler = () => {
        dispacth(chocolateAction.add1(props.item))
        console.log('added')
    }
    const add2CandyHandler = () => {
      dispacth(chocolateAction.add1({...props.item, quantity: 2}))
      console.log('added2')
  }
  const add3CandyHandler = () => {
    dispacth(chocolateAction.add1({...props.item, quantity: 3}))
    console.log('added3')
}
  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <Card style={{ width: "40rem", margin: '1rem', fontSize: '2rem'}}>
      <Card.Body>
        <Card.Title>Chocolates</Card.Title>
        <ListGroup variant="flush">
          <ListGroup.Item>{props.item.name}</ListGroup.Item>
          <ListGroup.Item>{props.item.des}</ListGroup.Item>
          <ListGroup.Item> Rs {props.item.price}</ListGroup.Item>
        </ListGroup>
        <div>
        <Button variant="primary" onClick={add1CandyHandler}>Add 1</Button>
        <Button variant="secondary" onClick={add2CandyHandler}>Add 2</Button>
        <Button variant="success" onClick={add3CandyHandler}>Add 3</Button>
        </div>
      </Card.Body>
    </Card>
    </div>
  );
};

export default ProductItem;
