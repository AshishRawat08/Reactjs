import "./App.css";
import ClassComponent from "./pages/ClassComponent";
import FunctionComponent from "./pages/FunctionComponent";
import { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import BaseHoc from "./hoc/Basehoc";

function App() {
  const author = "William";
  const [ name, setName] = useState("Ashish");
  return (
    <Routes>
    <Route path="/" element ={<BaseHoc><ClassComponent /></BaseHoc>}/>
    <Route path="/functional-component" element ={<BaseHoc><FunctionComponent
    name = {name}
    age = {34}
    author = {author}
    setName = {setName} /></BaseHoc>}/>
   </Routes>
    
  );
}

export default App;
