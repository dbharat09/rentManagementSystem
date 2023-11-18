import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ListGroup from "./Components/ListGroup";
import Login from "./Components/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" Component={Login}></Route>
        <Route path="/list" Component={ListGroup}></Route>
      </Routes>
    </Router>
  );
}

export default App;
