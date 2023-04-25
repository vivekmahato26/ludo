import logo from "./logo.svg";
import "./App.css";
import Board from "./components/board";
import Dice from "./components/dice";

function App() {
  return (
    <div className="App">
      <Dice/>
      <Board />
    </div>
  );
}

export default App;
