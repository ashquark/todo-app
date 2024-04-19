import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from './components/Navbar';
import ListBox from "./components/ListBox";
import BackgroundImg from "./360_F_351512882_2kFH8IaSe4lyA7SXBLzEXyGKNEgbO1iH.jpg";

function App() {
  return (
    <div style={{ backgroundImage: `url(${BackgroundImg})`, backgroundSize: "cover", minHeight: "100vh" }}>
      <Navbar />
      <ListBox />
    </div>
  );
}

export default App;