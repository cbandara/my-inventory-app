import React from "react";
import Board from "./components/Board.js";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Board />
      </Provider>
    </div>
  );
}

export default App;
