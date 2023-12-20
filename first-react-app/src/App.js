import "./App.css";
import ClassComponent from "./components/ClassComponent";
import FunctionComponent from "./components/FunctionComponent";

function App() {
  const author = "ar";
  return (
    <div className="App">
      <p>Class Components</p>
      <ClassComponent />
      <br />
      <p>Function Components</p>
      <FunctionComponent name = "Ashish" age = {23} author= {author} />
      {/* <FunctionComponent />   */}
    </div>
  );
}

export default App;
