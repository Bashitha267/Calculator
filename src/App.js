
import { useState } from 'react';
import './App.css';

function App() {
 const[value,setvalue]=useState("");
  return (

  <div className="App container">
    <div className='calculator shadow'>
      <h3>Calculator</h3>
   <div className='row1'>
    <input type='text'  className="input-text" value={value}></input>
    <p></p>
    <button type='button' className="numbtn"onClick={()=>{setvalue(value+7);}}>7</button>
    <button type='button' className="numbtn"onClick={()=>{setvalue(value+8);}}>8</button>
    <button type='button' className="numbtn"onClick={()=>{setvalue(value+9);}}>9</button>
    <button type='button' className="numbtn btn1"onClick={()=>{setvalue(value+"*");}}>*</button>
    </div>
    <div className='row1'>
    <button type='button' className="numbtn"onClick={()=>{setvalue(value+4);}}>4</button>
    <button type='button' className="numbtn"onClick={()=>{setvalue(value+5);}}>5</button>
    <button type='button' className="numbtn"onClick={()=>{setvalue(value+6);}}>6</button>
    <button type='button' className="numbtn btn1"onClick={()=>{setvalue(value+"/");}}>/</button>
    </div>
    <div className='row1'>
    <button type='button' className="numbtn"onClick={()=>{setvalue(value+1);}}>1</button>
    <button type='button' className="numbtn"onClick={()=>{setvalue(value+2);}}>2</button>
    <button type='button' className="numbtn"onClick={()=>{setvalue(value+3);}}>3</button>
    <button type='button' className="numbtn btn1"onClick={()=>{setvalue(value+"-");}}>-</button>
    </div>
    <div className='row1'>
    <button type='button' className="numbtn eql-button btn1"onClick={()=>{setvalue("");}}>AC</button>
    <button type='button' className="numbtn"onClick={()=>{setvalue(value+0);}}>0</button>
    <button type='button' className="numbtn btn1"onClick={()=>{setvalue(value+"+");}}>+</button>
    <button type='button' className="numbtn btn1"onClick={()=>{setvalue(eval(value));}}>=</button>
    </div>
    <footer >
    <p>© 2024 Nimesh Bashitha. All rights reserved.</p>
</footer>
    </div>
   
  </div>

  );
}

export default App;
