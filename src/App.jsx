import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './components/ItemCount.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import Navbar from "./components/Navbar";
import RouterApp from './components/Routes/RouterApp.jsx';





function App() {
  return (
    <div className="App">
          {/* <Navbar/> */}
          {/* <ItemListContainer/>
          <ItemCount/> */}
          <RouterApp/>
    </div>
  );
}

export default App;
