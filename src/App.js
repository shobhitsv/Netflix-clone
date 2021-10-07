import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

import NetFlixShow from "./pages/NetFlixShow";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" component={NetFlixShow} />
      </div>
    </BrowserRouter>
  );
}

export default App;
