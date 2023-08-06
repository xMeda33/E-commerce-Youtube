import data from "./data";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom"
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

function App() {
  return (
    <BrowserRouter>
    <div>
      <header>
        <Link to="/">ON&OFF</Link>
      </header>
      <main>
        <Routes>
          <Route path="/product/:slug" element={<ProductScreen/>}></Route>
          <Route path="/" element={<HomeScreen/>}></Route>
        </Routes>
        
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
