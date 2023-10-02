import { useState } from "react";
import Portfolio from "./components/Portfolio/Portfolio";
import projects from "./utils/projects";
import "./App.css";

function App() {
  const [selected, setSelected] = useState("All");

  const onSelectFilter = (e) => {
    let selectedButton = e.target.textContent;
    setSelected(selectedButton);
  };

  return (
    <div className="App">
      <Portfolio
        filters={["All", "Websites", "Flayers", "Business Cards"]}
        selected={selected}
        projects={projects}
        onSelectFilter={onSelectFilter}
      />
    </div>
  );
}

export default App;
