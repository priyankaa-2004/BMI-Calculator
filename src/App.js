import React, { useState } from 'react';
import './App.css';

function App() {
  // creating state for each variable
  const[weight,setWeight]=useState('');
  const[height,setHeight]=useState('');
  let[bmi,setBmi]=useState('');
  const[message,setMessage]=useState('');

  // writing logic
  let bmiButton=(e)=>{
    e.preventDefault();
    if(weight===0 || height===0){
      alert("enter valid height and weight");
    }
    else{
      let bmi=(weight/(height*height));
      setBmi(`Your BMI is: ${bmi.toFixed(1)}`);
      if (bmi<18.5){
        setMessage("You are Underweight");
      }
      else if (bmi>=18.5 && bmi<25){
        setMessage("Congratulations! You are Healthy!");
      }
      else if (bmi>=25 && bmi<30){
        setMessage("You are Overweight");
      }
      else {
        setMessage("You are Obese");
      }
    }
  }

  let btnReload=()=>{
    window.location.reload();
  }

  return (
    <div className="App">
      <div className='container'>
        <h1>BMI CALCULATOR</h1>
        <form>
          <div className='weight'>
            <label>Weight(in kg)</label>
            <input type='number' placeholder='Enter your weight' value={weight} onChange={(e)=>setWeight(e.target.value)}/>
          </div>
          <div className='height'>
            <label>Height(in m)</label>
            <input type="number" placeholder='Enter your height' value={height} onChange={(e)=>setHeight(e.target.value)}/>
          </div>
          <div className='btns'>
            <button className='btn' onClick={bmiButton}>Get your BMI</button>
            <button className='btn-reload' onClick={btnReload}>Reload</button>
          </div>
          <div className='msg'>
            <h3>{bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
