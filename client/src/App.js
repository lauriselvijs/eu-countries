import "./App.css";
import EUFlag from "./images/eu-flag.png";
import Countries from "./components/Countries";
import CountryNameTranslation from "./components/CountryNameTranslation";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Router>
        <img
          src={EUFlag}
          alt="EU flag"
          style={{
            width: 300,
            display: "block",
            margin: "auto",
            border: "20px solid rgba(0, 0, 0, 0.05)",
          }}
        />
        <Route exact path="/" component={Countries} />
        <Route
          exact
          path="/translation/:alpha3Code"
          component={CountryNameTranslation}
        />
      </Router>
    </div>
  );
}

export default App;
