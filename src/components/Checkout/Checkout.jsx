import React, { useContext, useState } from 'react';
import { getFirestore } from '../../firebase';
import 'firebase/firestore';
import firebase from 'firebase/app'
import { Link } from 'react-router-dom';
import { Form, Col, Button } from 'react-bootstrap';
import { CartContext } from '../../context/CartContext';
import Modal from 'react-bootstrap/Modal'



export default function Checkout() {

  const [orderId, setorderId] = useState('');
  const [modalShow, setModalShow] = useState(false);

  const handleClose = () => setModalShow(false);
  const handleShow = () => setModalShow(true);

  const context = useContext(CartContext);
  const db = getFirestore();
 

  function generarOrden(e) {
    console.log('Generando Orden');
    e.preventDefault();
    const form = document.getElementById('form');
    const newOrder = {
      buyer: {
        phone: form.formPhone.value,
        name: form.formName.value,
        surName: form.formSurname.value,
        email: form.formEmail.value,
        id: form.formDni.value
      },
      shipping: {
        address: form.formAddress.value,
        city: form.formCity.value,
        zip: form.formZip.value,
      },
       items: context.cart,
        date: firebase.firestore.Timestamp.fromDate(new Date()),
        total: context.cartTotal
    }
    const orders = db.collection('orders');
    orders.add(newOrder).then((resp) => {
      console.log(resp.id);
      setorderId(resp.id);
      context.clearCart();
      handleShow();
  });
  }

  const completarForm = (e) => {
    e.preventDefault();
    const form = document.getElementById('form');
    form.elements['formName'].value = 'Homero';
    form.elements['formSurname'].value = 'Simpson';
    form.elements['formDni'].value = '15274854';
    form.elements['formEmail'].value = 'homero@prueba.com';
    form.elements['formEmailConf'].value = 'homero@prueba.com';
    form.elements['formPhone'].value = '1124569800';
    form.elements['formAddress'].value = 'Av. Siempreviva 123';
    form.elements['formCity'].value = 'Springfield';
    form.elements['formZip'].value = '1234';
    form.elements['formCardName'].value = 'Homero J Simpson';
    form.elements['formCardNumber'].value = '1111222233334444';
    form.elements['formCardExpiration'].value = '0929';
    form.elements['formCardCvv'].value = '456';
  }

  return (
    <div>
      <Form className='container mt-2' id='form' onSubmit={generarOrden}>
        <Form.Row>
          <Form.Group as={Col} controlId="formName">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" placeholder="Nombre" />
          </Form.Group>

          <Form.Group as={Col} controlId="formSurname">
            <Form.Label>Apellido</Form.Label>
            <Form.Control type="text" placeholder="Apellido" />
          </Form.Group>

          <Form.Group as={Col} controlId="formDni">
            <Form.Label>Documento</Form.Label>
            <Form.Control type="number" placeholder="11111111" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group as={Col} controlId="formEmailConf">
            <Form.Label>Confirmar Email</Form.Label>
            <Form.Control type="email" placeholder="Confirmar Email" />
          </Form.Group>

          <Form.Group as={Col} controlId="formPhone">
            <Form.Label>Telefono</Form.Label>
            <Form.Control type="number" placeholder="11 2459 5218" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formAddress">
            <Form.Label>Dirección</Form.Label>
            <Form.Control type="text" placeholder="Av. Siempreviva 123" />
          </Form.Group>

          <Form.Group as={Col} controlId="formCity">
            <Form.Label>Ciudad</Form.Label>
            <Form.Control type="text" placeholder="Springfield" />
          </Form.Group>

          <Form.Group as={Col} controlId="formZip">
            <Form.Label>Codigo Postal</Form.Label>
            <Form.Control type="number" placeholder="1414" />
          </Form.Group>
        </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId="formCardName">
          <Form.Label>Nombre en Tarjeta</Form.Label>
          <Form.Control type="text" placeholder="Homero Simpson" />
        </Form.Group>

        <Form.Group as={Col} controlId="formCardNumber">
          <Form.Label>Numero de la Tarjeta</Form.Label>
          <Form.Control type="number" placeholder="4580 4824 4894 4824" />
        </Form.Group>

        <Form.Group as={Col} controlId="formCardExpiration">
          <Form.Label>Fecha de vencimiento de la Tarjeta</Form.Label>
          <Form.Control type="number" placeholder="09/29" />
        </Form.Group>

        <Form.Group as={Col} controlId="formCardCvv">
          <Form.Label>CVV</Form.Label>
          <Form.Control type="number" placeholder="123" />
        </Form.Group>

      </Form.Row>

        <Button 
          variant="primary" 
          type="submit"
          onClick={handleShow}
          >
          Pagar ${context.cartTotal}
        </Button>

        <Button 
          variant="warning" 
          type="submit" 
          className='ml-2'
          onClick={completarForm}
        >
          Completar Form
        </Button>
      </Form>

      <div>
         <Modal
         show={modalShow}
         onHide={handleClose}
         backdrop="static"
         keyboard={false}
         centered
         className="glass animate__animated animate__fadeIn"
         >
         <Modal.Body className="text-center">
             <h1 className="h1-home mt-3">Compra Finalizada!</h1>

             <p className="mb-3">Un email de confirmación te ha sido enviado.</p>
             <p className="mb-3">La ID de tu orden es: {orderId}</p>
             <Link to="/home">
                 <button className="btn btn-success px-4 py-2 mb-3">Home</button>
             </Link>
         </Modal.Body>
         </Modal>
     </div>
      
    </div>
     
    
    
  );
}