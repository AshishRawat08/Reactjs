import React from "react";
const BaseHoc = (Component) => ({...props}) =>{
   return (
        <div>
            <h1>This is my Header</h1>
            <Component {...props} />
            <h1>This is my footer</h1>
        </div>
   );
}
export default BaseHoc;