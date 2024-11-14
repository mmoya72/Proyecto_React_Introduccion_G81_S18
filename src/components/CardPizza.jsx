import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

const CardPizza = (props) => {
  const valor = Intl.NumberFormat("es-CL").format(props.price);
  const lista = props.ingredients;
  const listado = lista.join(', ');
  return (
    <>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
          <p className='par_14'>Ingredientes:</p>
          <p className='par_12'>{listado}</p>
        </ListGroup.Item>
      </ListGroup>
        <Card.Body>
          <p className='par_22'>Precio: ${valor}</p>
        < div className="d-flex justify-content-evenly">
            <Button variant="outline-dark" size="sm">Ver Mas 👀</Button>
            <Button variant="dark" size="sm">Añadir 🛒</Button>
          </div>
        </Card.Body>
    </Card>
    </>
  )
}

export default CardPizza