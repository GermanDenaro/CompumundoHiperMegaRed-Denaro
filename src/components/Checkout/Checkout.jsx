import React, { useContext, useState } from 'react';
import { getFirestore } from '../../firebase';
import 'firebase/firestore';
import firebase from 'firebase/app'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { CartContext } from '../../context/CartContext';
import Modal from 'react-bootstrap/Modal'
import { Formik, Form } from 'formik'
import  TextField  from './TextField'
import * as Yup from 'yup'



export default function Checkout() {

  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, 'Debe contener 15 carácteres o menos')                                         
      .required('El nombre es requerido'),
    lastName: Yup.string()
      .max(20, 'Debe contener 20 carácteres o menos')
      .required('El apellido es requerido'),
    id: Yup.string()
      .max(15, 'Debe contener 15 carácteres o menos')
      .required('El documento es requerido'),
    email: Yup.string()
      .email('Email inválido')
      .required('El email es Requerido'),
    emailConf: Yup.string()
      .oneOf([Yup.ref('email'), null], 'El email debe coincidir')
      .required('El email es Requerido'),
    phone: Yup.string()
      .max(15, 'Debe contener 15 carácteres o menos')
      .required('Requerido'),
    address: Yup.string()
      .max(15, 'Debe contener 15 carácteres o menos')
      .required('Requerido'),
    city: Yup.string()
      .max(15, 'Debe contener 15 carácteres o menos')
      .required('Requerido'),
    zip: Yup.string()
      .max(15, 'Debe contener 15 carácteres o menos')
      .required('Requerido'),
    cardName: Yup.string()
      .max(15, 'Debe contener 15 carácteres o menos')
      .required('Requerido'),
    cardNumber: Yup.string()
      .max(15, 'Debe contener 15 carácteres o menos')
      .required('Requerido'),
    cardExpiration: Yup.string()
      .max(15, 'Debe contener 15 carácteres o menos')
      .required('Requerido'),
    cardCvv: Yup.string()
      .max(15, 'Debe contener 15 carácteres o menos')
      .required('Requerido'),
  })

  const [orderId, setorderId] = useState('');
  const [modalShow, setModalShow] = useState(false);

  const handleClose = () => setModalShow(false);
  const handleShow = () => setModalShow(true);

  const context = useContext(CartContext);
  const db = getFirestore();
 

  function generarOrden(e) {
    console.log('Generando Orden');
    const form = document.getElementById('form');
    const newOrder = {
      buyer: {
        firstName: e.firstName,
        lastName: e.lastName,
        id: e.id,
        email: e.email,
        phone: e.phone
      },
      shipping: {
        address: e.address,
        city: e.city,
        zip: e.zip,
      },
       items: context.cart,
        date: firebase.firestore.Timestamp.fromDate(new Date()),
        total: context.cartTotal
    }
    const orders = db.collection('orders');
     orders.add(newOrder).then((resp) => {
       setorderId(resp.id);
       context.clearCart();
       handleShow();
   });
  }

  const completarForm = (e) => {
    e.preventDefault();
    const form = document.getElementById('form');
    form.elements['firstName'].value = 'Homero';
    form.elements['lastName'].value = 'Simpson';
    form.elements['id'].value = '15274854';
    form.elements['email'].value = 'homero@prueba.com';
    form.elements['emailConf'].value = 'homero@prueba.com';
    form.elements['phone'].value = '1124569800';
    form.elements['address'].value = 'Av. Siempreviva 123';
    form.elements['city'].value = 'Springfield';
    form.elements['zip'].value = '1234';
    form.elements['cardName'].value = 'Homero J Simpson';
    form.elements['cardNumber'].value = '1111222233334444';
    form.elements['cardExpiration'].value = '09/29';
    form.elements['cardCvv'].value = '456';
  }

  return (
    <div className='container mt-3'>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          id: '',
          email: '',
          emailConf: '',
          phone: '',
          address: '',
          city: '',
          zip: '',
          cardName: '',
          cardNumber: '',
          cardExpiration: '',
          cardCvv: ''
        }}
        validationSchema={validate}
        onSubmit={generarOrden}
      
      >
        {formik => (
          <div className='container'>
            <Form id='form'>

              <div className="row">
                <div className="col-4">
                  <TextField label='Nombre' name='firstName' type='text' />
                </div>
                <div className="col-4">
                  <TextField label='Apellido' name='lastName' type='text' />
                </div>
                <div className="col-4">
                  <TextField label='Documento' name='id' type='number' />
                </div>
              </div>

              <div className="row">
                <div className="col-4">
                  <TextField label='Email' name='email' type='email' />
                </div>
                <div className="col-4">
                  <TextField label='Confirmar Email' name='emailConf' type='email' />
                </div>
                <div className="col-4">
                  <TextField label='Teléfono' name='phone' type='number' />
              </div>

              </div>
              <div className="row">
                <div className="col-4">
                  <TextField label='Dirección' name='address' type='text' />
                </div>
                <div className="col-4">
                  <TextField label='Ciudad' name='city' type='text' />
                </div>
                <div className="col-4">
                  <TextField label='Codigo Postal' name='zip' type='number' />
                </div>
              </div>

              <div className="row">
                <div className="col-6">
                  <TextField label='Nombre en la tarjeta' name='cardName' type='text' />
                </div>
                <div className="col-6">
                  <TextField label='Número de tarjeta' name='cardNumber' type='number' />
                </div>
              </div>

              <div className="row">
                <div className="col-6">
                  <TextField label='Fecha de vencimiento de la tarjeta' name='cardExpiration' type='text' />
                </div>
                <div className="col-6">
                  <TextField label='CVV' name='cardCvv' type='number' />
                </div>
              </div>

              <Button 
                variant="primary" 
                type="submit"
                className='mt-4'
                >
                Pagar ${context.cartTotal}
              </Button>
              <Button 
                variant="warning" 
                type="submit" 
                className='ml-2 mt-4'
                onClick={completarForm} 
              >
                Completar Form
              </Button>
            </Form>
          </div>
        )}
      </Formik>

      <Modal
        show={modalShow}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
        // className="animate__animated animate__fadeIn"
      >
        <Modal.Body className="text-center">
          <h1 className="h1-home mt-3">Purchase completed!</h1>
            <p className="mb-3">A confirmation has been sent to your email</p>
              <p className="mb-3">Your order ID is: {orderId}</p>
                <Link to="/home">
                  <button className="btn btn-success px-4 py-2 mb-3">Home</button>
                </Link>
        </Modal.Body>
      </Modal>
      {/* <Form className='container mt-2' id='form' onSubmit={generarOrden}>
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
     </div> */}
      
    </div>
     
    
    
  );
}