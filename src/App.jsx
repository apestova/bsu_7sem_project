import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { MainPage } from "./pages/MainPage";
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { getTodosFromLocalStorage } from "./actions/todos";
import { ErrorPage } from "./pages/ErrorPage";

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
                  <Route path="*" exact component={ErrorPage} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
