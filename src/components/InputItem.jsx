import React, { useState } from "react";

function InputItem(props){
return (<div className="form">
        <input type="text" onChange={props.handleChange} value={props.input} />
        <button onClick={props.addItems}>
          <span>Add</span>
        </button>
      </div>);
}
export default InputItem;