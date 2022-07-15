import './App.css';
import Navbar from './components/Navbar';
import React, {useState} from 'react';
import Textarea from './components/Textarea';

function App() {
  const [mode ,setMode] = useState('light');
  
  const toogleMode =() =>{
    if (mode === 'dark'){
      setMode('light')
      document.body.style.backgroundColor = 'white'  
  
    }
    else{
      setMode('dark')
      document.body.style.backgroundColor = 'grey'
    
    }
  }
const change = ()=>{
  if(mode === 'dark'){
    change ='enable light mode'
  }
  else{
    change = 'enable dark mode'
  }
}

  return (
    <>
   <Navbar heading='mynav' mode={mode} toogleMode={toogleMode} change={change} />
   <div className='container my-3'>
   <Textarea text='enter your text here'/>
   </div>
   </>
  );
}

export default App;
