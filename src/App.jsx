import 'bootstrap/dist/css/bootstrap.min.css';
import RouterApp from './components/Routes/RouterApp.jsx';
import { CartProvider } from './context/CartContext'
import './App.css'

function App() {


  return (
    <CartProvider>
        <RouterApp />
    </CartProvider>
  );
}

export default App;
