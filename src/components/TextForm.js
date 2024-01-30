import React , { useState} from 'react'

export default function TextForm(props) {
  const handleUPClick= () => {
    console.log("Uppercase was clicked"+text);
    const newt = text.toUpperCase();
    setText(newt);
    props.showalert("Converted to UpperCase","success");

  }
  const handleLowClick = () => {
    const newt = text.toLowerCase();
    setText(newt);
    props.showalert("Converted to LowerCase","success");
  }
  const handleOnChange= (event) => {
    console.log("on change");
    setText(event.target.value)
  }
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }
  const handleSnakecase = () => {
    console.log("on handleSnakecase");
    let newtext=text.split(" ");
    let res=newtext.join("_");
    setText(res);
    props.showalert("Converted to SnakeCase","success");
  }
  const handleAltercase= () => {
    console.log("Uppercase was clicked"+text);
    let res="";
    for(let i=0;i<text.length;i++){
        if(text[i]>="a" && text[i]<="z"){
          res+=String.fromCharCode(text.charCodeAt(i) - 32)
        }
        else if(text[i]>="A" && text[i]<="Z"){
          res+=String.fromCharCode(text.charCodeAt(i) + 32)
        }
        else{
          res+=" ";
        }
    }
    setText(res);
    props.showalert("Case Altered","success");

  }
  const handleClearText=()=>{
    let newtext="";
    setText(newtext);
    props.showalert("Text cleared","success");

  }
  const handleExtraSpace= ()=>{
    console.log(text);
    let newtext = text.replace(/\s+/g, ' ').trim();
    setText(newtext);
    props.showalert("ExtraSpace removed","success");
  }

 
    
    const handleCopy =async () =>{
      let copy=text;
      try {
        await navigator.clipboard.writeText(copy);
        console.log('Content copied to clipboard');
        alert("copied successfully!");
        props.showalert("Copied to Clipboard","success");
      } catch (err) {
        console.error('Failed to copy: ', err);
      }

    }
    const handleEncode =() =>{
      let newtext =btoa(text);
      setText(newtext);
      props.showalert("Text Encoded","success");
    }
  
    const handleDecode =() =>{
      let newtext =atob(text);
      setText(newtext);
      props.showalert("Text Decoded","success");
    }

    //for counting words 
    
    const count = ()=>{
      if (text.length>0){
      return text.trim().split(/\s+/).length;
      }
      else{
      return 0;
      }
      }




  const [text, setText] = useState("");
  return (
    <>
    <div className="container mt-3">
      <h2 className={`text-${props.mode==='light'?'dark':'light'}`} >{props.title}</h2>
        <div className="mb-3">
      <p id='copied'></p>
        <textarea className={`form-control bg-${props.mode==='light'?'light':'black'} text-${props.mode==='light'?'black':'white'}`} value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="6"></textarea>
        </div>

        <button className="btn btn-primary mx-2" onClick={handleUPClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handleSnakecase}>Convert to SnakeCase</button>
        <button className="btn btn-primary mx-2" onClick={handleAltercase}>Alter Case</button>
        
        <button className="btn btn-primary mx-2" onClick={handleExtraSpace}> Remove Extra Space</button><br></br>
        <button className="btn btn-primary mx-2" onClick={handleClearText}> Clear Text</button>

        <button className="btn btn-primary mx-2" onClick={handleEncode}> Encode to Bas64</button>
        <button className="btn btn-primary mx-2" onClick={handleDecode}> Decode Base64</button>

        <button className="btn btn-primary mx-2" onClick={handleCopy}> Copy to Clipboard</button>
        <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
    </div>

    <div className={`container my-3 text-${props.mode==='light'?'dark':'light'}`}>
      <h4>Text summary below.</h4>
      <p>{count()} words and {text.length} characters</p>
      <p>{0.008 * text.split(/\s+/).length-0.008} Minutes to read</p>
      {/* <p>{text.trim() === "" ? 0 : text.trim().split(" ").length} words and {text.length} characters</p> */}

      
      <h4>Preview</h4>
      <p>{text.length>0?text:"Enter something in the textarea to preview it here."}</p>

      
    </div>
    </>
  )
}
