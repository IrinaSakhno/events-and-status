import "./App.css";
import Dropdown from "./components/Dropdown/Dropdown";
import menu from "./utils/menu";

function App() {
  return (
    <div className="App">
      <Dropdown options={menu} />
    </div>
  );
}

export default App;
