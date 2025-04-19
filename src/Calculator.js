import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const handleClick = (value) => {
        setInput(input + value);

    };

    const handleOpert = (buttonValue) => {
        if (['+', '-', '*', '/'].includes(buttonValue) && ['+', '-', '*', '/'].includes(input.slice(-1))) {
            return;
        }
        setInput(input + buttonValue);
    };

    const handleBackspace = () => {
        setInput(input.slice(0, -1));
    };
    const handleClear = () => {
        setInput('');
        setResult('');
    };

    const handleCalculate = () => {
        try {
            setResult(eval(input).toString());
        } catch (error) {
            setResult('Error');
        }
    };


    return (

        <center>
            <h1>Calculator</h1>
            <div className="first">
                <input type="text" value={input} readOnly />
                <button className='cut' onClick={() => handleBackspace()}><i class="fa-solid fa-arrow-left"></i></button>
            </div>
            <div className='second'>
                <input type='text' value={result} readOnly />
                <button className='clear' onClick={() => handleClear()}>C</button>
            </div>
            <div className="buttons">
                <button className='num' onClick={() => handleClick('1')}>1</button>
                <button className='num' onClick={() => handleClick('2')}>2</button>
                <button className='num' onClick={() => handleClick('3')}>3</button>
                <button className='num'style={{ backgroundColor: "rgb(255, 200, 0)" }} onClick={() => handleOpert('+')}>+</button>
                <br></br>
                <button className='num' onClick={() => handleClick('4')}>4</button>
                <button className='num' onClick={() => handleClick('5')}>5</button>
                <button className='num' onClick={() => handleClick('6')}>6</button>
                <button className='num' style={{ backgroundColor: "rgb(255, 200, 0)" }} onClick={() => handleOpert('-')}>-</button>
                <br></br>
                <button className='num' onClick={() => handleClick('7')}>7</button>
                <button className='num' onClick={() => handleClick('8')}>8</button>
                <button className='num' onClick={() => handleClick('9')}>9</button>
                <button className='num' style={{ backgroundColor: "rgb(255, 200, 0)" }} onClick={() => handleOpert('*')}>*</button>
                <br></br>
                <div className='lastnum'>
                    <button className='num' onClick={() => handleClick('0')}>0</button>
                    <button className='num' style={{ backgroundColor: "rgb(255, 200, 0)" }} onClick={() => handleClick('.')}>.</button>
                    <button className='num' style={{ backgroundColor: "rgb(255, 200, 0)" }} onClick={() => handleOpert('/')}>/</button>
                    <button className='num' onClick={() => handleCalculate()}>=</button>
                </div>
            </div>
        </center>
    );
}

export default Calculator;
