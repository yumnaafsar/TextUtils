import React, { useState } from "react";

export default function TextForm(props) {

  const handleUpClick=()=>{
    // console.log("Uppercase was clicked:" + text);
    let newText= text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upperCase", "success");
  }

  const handleLowClick=()=>{
    // console.log("Lowercase was clicked:" + text);
    let newText= text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowerCase", "success");
  }
  const handleclearClick=()=>{
    let newText= "";
    setText(newText);
    props.showAlert("Text cleared", "success");
  }
  const handleReverseClick=()=>{
    let split= text.split("");
    let reverse=split.reverse();
    let newText=reverse.join("");
    setText(newText);
    props.showAlert("Text reversed", "success");
  }

  const handleCopy=()=>{
    console.log("I am copy");
    var text= document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied", "success");
  }

  const handleExtraSpaces=()=>{
    let newText= text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces Removed", "success");
  }
  

  const handleOnChange=(event)=>{
    // console.log("Onchange was clicked");
    setText(event.target.value);
  }

  const [text, setText] = useState("");
    //text='new text'; //wrong way to change the state
    //setText('new text'); //correct way to change the state
  
  return (

    <>
    <div className="mb-3" style={{color:props.mode==='dark'?'white': '#042743'}}>
      <h1>{props.heading} </h1>

      <textarea
        className="form-control"
        id="myBox"
        value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey': 'white', color: props.mode==='dark'?'white': '#042743'}}
        rows="8"
      ></textarea>

      <button className="btn btn-primary my-3" onClick={handleUpClick}>Convert to UpperCase</button>
      <button className="btn btn-primary my-3 mx-3" onClick={handleLowClick}>Convert to LowerCase</button>
      <button className="btn btn-primary my-3 mx-3" onClick={handleclearClick}>Clear Text</button>
      <button className="btn btn-primary my-3 mx-3" onClick={handleReverseClick}>Reverse Text</button>
      <button className="btn btn-primary my-3 mx-3" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary my-3 mx-3" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

    </div>

    <div className="container" style={{color:props.mode==='dark'?'white': '#042743'}}>
      <h2>Your text summary</h2>
      <p> {text.split(" ").length} words and {text.length} charcaters</p>
      <p> {0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0 ?text:"Enter something in the textbox above to preview" }</p>
    </div>
    
    </>
  );
}
