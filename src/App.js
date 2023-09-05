import React, { useState } from 'react';
import './App.css'

const App = () => {
  const [values, setValues] = useState('');

  const calculateRes = (values) => {
    try{
      const operators = ['+','-','*','/','%'];
      let operator = null;

      for(let i=0; i<values.length; i++){
        if(operators.includes(values[i])){
          operator = values[i];
          break;
        }
      }

      if(!operator){
        setValues(parseFloat(values).toString());
        return;
      }

      const [operand1,operand2] = values.split(operator).map(parseFloat);
      let result;

      switch(operator) {
        case '+':
          result = operand1 + operand2;
          break;
        case '-':
          result = operand1 - operand2;
          break;
        case '*':
          result = operand1 * operand2;
          break;
        case '/':
          result = operand1 / operand2;
          break;
        case '%':
          result = operand1 % operand2;
          break;
        default:
          throw new Error('Invalid Operator');
      }

      setValues(result.toString());
    }
    catch(error){
      setValues('Error Input');
    }
  }

  const handleButtonClicked = (value) => {
    if (value === 'AC') {
      setValues('');
    }
    else if (value === 'DE') {
      setValues(values.slice(0,-1));
    }
    else if (value === '=') {
      // try{
      //   setValues(eval(value).toString());
      // }
      // catch(error){
      //   setValues('Error Input')
      // }
      calculateRes(values);
    }
    else {
      setValues((preValue) => preValue + value)
    }
  }
  return (
    <>
      <div className="cal-container">
        <div className="cal-wrapper">
          <form action=''>
            <div className="cal-disp">
              <input type="text" defaultValue={values} />
            </div>
            <div className="cal-actions">
              <input type="button" value="AC" className='fr' onClick={() => handleButtonClicked('AC')} />
              <input type="button" value="DE" className='rm' onClick={() => handleButtonClicked('DE')} />
              <input type="button" value="%" onClick={() => handleButtonClicked('%')} />
              <input type="button" value="/" onClick={() => handleButtonClicked('/')} />
            </div>
            <div className="cal-actions">
              <input type="button" value="7" onClick={() => handleButtonClicked('7')} />
              <input type="button" value="8" onClick={() => handleButtonClicked('8')} />
              <input type="button" value="9" onClick={() => handleButtonClicked('9')} />
              <input type="button" value="*" onClick={() => handleButtonClicked('*')} />
            </div>
            <div className="cal-actions">
              <input type="button" value="4" onClick={() => handleButtonClicked('4')} />
              <input type="button" value="5" onClick={() => handleButtonClicked('5')} />
              <input type="button" value="6" onClick={() => handleButtonClicked('6')} />
              <input type="button" value="+" onClick={() => handleButtonClicked('+')} />
            </div>
            <div className="cal-actions">
              <input type="button" value="1" onClick={() => handleButtonClicked('1')} />
              <input type="button" value="2" onClick={() => handleButtonClicked('2')} />
              <input type="button" value="3" onClick={() => handleButtonClicked('3')} />
              <input type="button" value="-" onClick={() => handleButtonClicked('-')} />
            </div>
            <div className="cal-actions">
              <input type="button" value="0" onClick={() => handleButtonClicked('0')} />
              <input type="button" value="." onClick={() => handleButtonClicked('.')} />
              <input type="button" value="=" onClick={() => handleButtonClicked('=')} className='equal' />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default App