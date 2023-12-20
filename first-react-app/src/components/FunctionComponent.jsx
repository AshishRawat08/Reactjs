import React, { useState} from "react";


// const  FunctionComponent = () => {}    both are  same 
function FunctionComponent(props) {
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
                <h5>My fisrt name : {props.name}</h5>
                <h5>My Age : {props.age}</h5>
                <h5>Author name : {props.author}</h5>
        </div>
    )
}
export default FunctionComponent;