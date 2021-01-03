import "./App.css";

import { Switch, Route } from "react-router-dom";

// COMPONENTS
// import AllSpeak from "./components/Cards/AllSpeak";
// import ChopCheese from "./components/Cards/ChopCheese";
// import RememberDat from "./components/Cards/RememberDat";
import HomePage from "../src/pages/HomePage";
// import ProjectsPage from "../src/pages/ProjectsPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
