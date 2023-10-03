import "./App.css";
import Store from "./components/Store/Store";
import products from "../src/utils/products";

function App() {
  return (
    <div className="App">
      <Store products={products} />
    </div>
  );
}

export default App;
