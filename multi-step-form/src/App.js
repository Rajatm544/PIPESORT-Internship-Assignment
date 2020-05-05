import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./components/Main.component";

function App() {
    return (
        <Router>
            <Route path="/" exact component={Main} />
        </Router>
    );
}

export default App;
