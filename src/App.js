import React from "react";
import Board from "./components/Board.js";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./store";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Board />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
