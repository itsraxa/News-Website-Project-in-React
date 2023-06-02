import React, { useState,useRef,useEffect } from "react";
import '../TextForm.css';

export default function TextFoarm(props) {
  const [text,setText] = useState("");
  const textAreaRef = useRef(0)
  useEffect(() => {
    // focus the textarea
      textAreaRef.current.focus()
  }, [])

  const alert = (alertText) =>{
    text===' '?
    props.showAlert("TextArea Is Empty",'warning'):
    props.showAlert(alertText,'success')
  }
  
  const toUpperCase=()=>{
    let newtext = text.toUpperCase()
    setText(newtext)
    alert('Converted To Uppercase')
    }
    const toLowerCase=()=>{
      let newtext = text.toLowerCase()
      setText(newtext)
      alert("Converted To Lowercase")
    }
    const handleCopy=()=>{
      navigator.clipboard.writeText(text)
      alert("Text Copied")
    }
    const handleClear=()=>{
      setText('')
      alert("TextArea Cleaned")
    }
    const handleExtraSpaces=()=>{
      let newText = text.split(/[ ]+/)
      setText(newText.join(" "))
      alert("Extra Spaces Removed ")
    }
    const handleOnChange=(event)=>{
      setText(event.target.value)
    }
  return (
    <>
    <div   className="container mx-100 my-3">
      <h2 style={{color :props.mode ==='light'? 'black':'white'}} >{props.heading}</h2>
      <div className="mb-3" >
        <textarea
          style={{background:props.mode ==='light'? 'white':'grey',
          color:props.mode ==='light'? 'black':'white'}}
          className="form-control"
          id={`textArea${props.mode ==='light'? 'Light':'Dark'}` }
          ref={textAreaRef}
          placeholder='Enter Your Text Here....'
          value={text} onChange={handleOnChange} rows="8" >
        </textarea>
      </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={toUpperCase}>Convert To Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={toLowerCase}>Convert To Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClear}>Clear</button>
    </div>
    <div className="container my-3" style={{color :props.mode ==='light'? 'black':'white'}}>
      <h2>Text Summary</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words  
         and <span>{text.split(" ").join("").length } character</span></p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} min to read</p>
      <h1>Text Preview</h1>
      <p>{text.length>0? text :'Enter something above to preview it here....'}</p>
    </div>
    </>
  );
}
