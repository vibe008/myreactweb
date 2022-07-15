import React, {useState} from 'react'
export default function Textarea (props){

  const [text ,setText] = useState('enter your text here')

  const handleOnchange = (event)=>{
    setText(event.target.value)
  }
   const handleUpclick = ()=>{
   let newtext = text.toUpperCase ();
   setText(newtext)
}
const handleLoclick = ()=>{
  let newtext = text.toLowerCase ();
  setText(newtext)
}

    return(
<div className="mb-3">
  <h1>{props.text}</h1>
  <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
  <textarea className="form-control" value={text} onChange={handleOnchange} id="exampleFormControlTextarea1" rows="8"></textarea>
  <div className="but my-5 " >
  <button type="button " className="btn btn-primary " onClick={handleUpclick}>convert to uppercase</button>
  <button type="button  " className="btn btn-primary " onClick={handleLoclick}>convert to lowercase</button>
  </div>
</div>
    )
}