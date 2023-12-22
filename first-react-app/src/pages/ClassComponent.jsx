import React from "react";
import BaseHoc from "../hoc/Basehoc";

class ClassComponent extends React.Component{
constructor (props){
  super(props)

  this.state ={
    name: "john",
    age : "3"
  }
}
    render(){
        return (
            <div className="App">
              <header className="App-header">
                <p>
                This is Class Components
                </p>
             
              </header>
            </div>
          );
    }
}

export default BaseHoc(ClassComponent);