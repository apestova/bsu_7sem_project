import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { MainPage } from "./pages/MainPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={MainPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
