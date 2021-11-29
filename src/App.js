import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { MainPage } from "./pages/MainPage";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getTodosFromLocalStorage } from "./actions/todos";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTodosFromLocalStorage());
    }, []);

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
