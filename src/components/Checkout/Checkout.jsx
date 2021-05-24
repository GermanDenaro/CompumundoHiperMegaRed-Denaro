import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import { getFirestore } from '../../firebase';
import 'firebase/firestore';
import firebase from 'firebase/app'
import { Form, Col, Button } from 'react-bootstrap';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        CompuMundoHyperMegaRed
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const onSubmit = (e) => {
  e.preventDefault();
  console.log('En submit');
}

  const db = getFirestore();

  function generarOrden(e) {
    console.log('Generando Orden');
    e.preventDefault();
    const form = document.getElementById('form');
    const newOrder = {
      buyer: {
        phone: form.formPhone.value,
        name: form.formName.value,
        surName: form.formSurName.value,
        email: form.formEmail.value
      },
      shipping: {
        address: form.formAddress.value,
        city: form.formCity.value,
        zip: form.formZip.value,
      },
      // items: [{
      //   id,
      //   title,
      //   price
      // }],
        date: firebase.firestore.Timestamp.fromDate(new Date()),
        // total: 
    }
    const orders = db.collection('orders');
    orders.add(newOrder).then((resp) => {
      console.log(resp);
      console.log(resp.id);
      // props.setLastId(resp.id);
      // context.clearCart();
      // setLoading(false);
      // handleShow();
  });
  }

  

  

const steps = ['Dirección de envío', 'Detalles de pago', 'Revisión de la orden'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <Review />;
    default:
      throw new Error('Unknown step');
  }
}

export default function Checkout() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const completarForm = (e) => {
    e.preventDefault();
    const form = document.getElementById('form');
    form.elements['formName'].value = 'NombrePrueba';
    form.elements['formSurname'].value = 'ApellidoPrueba';
    form.elements['formEmail'].value = 'Email@prueba.com';
    form.elements['formEmailConf'].value = 'Email@prueba.com';
    form.elements['formPhone'].value = '1124569800';
    form.elements['formAddress'].value = 'AddressPrueba';
    form.elements['formCity'].value = 'CityPrueba';
    form.elements['formZip'].value = '1234';
    form.elements['formCardName'].value = 'CardPrueba';
    form.elements['formCardNumber'].value = '1111222233334444';
    form.elements['formCardExpiration'].value = '09/29';
    form.elements['formCardCvv'].value = '999';
  }

  return (
    <Form className='container mt-2' id='form'>
      <Form.Row>
        <Form.Group as={Col} controlId="formName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Nombre" />
        </Form.Group>

        <Form.Group as={Col} controlId="formSurname">
          <Form.Label>Apellido</Form.Label>
          <Form.Control type="text" placeholder="Apellido" />
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
        onSubmit={onSubmit}
        >
        Submit
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
    // <Fragment>
    //   <CssBaseline />
    //   <main className={classes.layout}>
    //     <Paper className={classes.paper}>
    //       <Typography component="h1" variant="h4" align="center">
    //         Checkout
    //       </Typography>
    //       <Stepper activeStep={activeStep} className={classes.stepper}>
    //         {steps.map((label) => (
    //           <Step key={label}>
    //             <StepLabel>{label}</StepLabel>
    //           </Step>
    //         ))}
    //       </Stepper>
    //       <Fragment>
    //         {activeStep === steps.length ? (
    //           <Fragment>
    //             <Typography variant="h5" gutterBottom>
    //               Gracias por su compra.
    //             </Typography>
    //             <Typography variant="subtitle1">
    //               Su número de orden es #2001539. Se le pedirá este numero en caso de que suceda alguna eventualidad.
    //             </Typography>
    //           </Fragment>
    //         ) : (
    //           <Fragment>
    //             {getStepContent(activeStep)}
    //             <div className={classes.buttons}>
    //               {activeStep !== 0 && (
    //                 <Button onClick={handleBack} className={classes.button}>
    //                   Atras
    //                 </Button>
    //               )}
    //               <Button
    //                 variant="contained"
    //                 color="primary"
    //                 onClick={handleNext}
    //                 className={classes.button}
    //               >
    //                 {activeStep === steps.length - 1 ? 'Confirmar Compra' : 'Siguiente'}
    //               </Button>
    //             </div>
    //           </Fragment>
    //         )}
    //       </Fragment>
    //     </Paper>
    //     <Copyright/>
    //   </main>
    // </Fragment>
  );
}