import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../src/styles/global.css";
import CoffeePage from "./Components/CoffeeComponent/CoffeePage";
import Home from "./Components/Home";
import { Cart } from "./Components/Cart";
import { Route , Routes} from "react-router-dom";


function App() {
  return (

      <div>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/coffees" element={ <CoffeePage />} />
          <Route path="/cart" element={<Cart />} /> 
          </Routes>
           {/* <Route path="/menu">
            <div className="App container mt-3 text-center">
              <CoffeePage />
            </div>
          </Route>
         */}
       
        {/* <Route path="/">
           <Home/>
        </Route>

        <Route path="/coffeePage">
        <CoffeePage />
          </Route>

          
          <Route path="/cart">
          <Cart />
          </Route> */}
          
      </div>
  );
}
export default App;
