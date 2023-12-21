import "./App.css";
import ClassComponent from "./components/ClassComponent";
import FunctionComponent from "./components/FunctionComponent";
import { useState } from "react";

function App() {
  const author = "William";
  const [ name, setName] = useState("Ashish");
  return (
    <div className="App">
      <p>Class Components</p>
      <ClassComponent />
      <br />
      <p>Function Components</p>
      {/* <FunctionComponent name = {"Ashish"} age = {23} author= {author} /> */}
      <FunctionComponent name = {name}  age = {23} author= {author} setName = {setName}/>
    </div>
  );
}

export default App;
