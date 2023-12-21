import React, { useState} from "react";


// const  FunctionComponent = () => {}      both are same 
function FunctionComponent(props) {
    const [ changeName, setChangeName ] = useState("");
    
    const [ myname, setMyname] = useState();

    const[ count, setCount]= useState(0);
    
    const reduceCount = () => {
        setCount(count - 2)
    };
    return(
        <div>
            <p>
                This is functional conmponent <br />
            </p>
                <button onClick={() => setCount(count + 1)}>click me to increase by 1 </button><br />
                <button onClick={reduceCount}>click me to decrease by 2 </button>
                <h2>{count}</h2>

                <button onClick={() => setMyname("DEV")}>click me to print my name </button><br />
                <h1>{ myname }</h1>

                 {/* PROPS ----getting name, age and author data from parent componentt(app.js) */}
                <h3>My Fisrt name : {props.name}</h3>
                <h3>My Age : {props.age}</h3>
                <h3>Author name : {props.author}</h3>
                <button onClick={() => props.setName("Akash")}>click me to change name </button><br /><br />

                {/* input   */}
                <input onChange = {(e) => setChangeName(e.target.value)}/>
                <button onClick={() => props.setName(changeName)}>click change name to</button><br /><br />
                
        </div>
    )
}

export default FunctionComponent;