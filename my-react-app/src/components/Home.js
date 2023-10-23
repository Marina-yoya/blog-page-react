import React from 'react';
import { useState } from 'react';
import './home.css';

function Home() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');
    const [previousInput, setPreviousInput] = useState('');

    const add = (a, b) => a + b;
    const subtract = (a, b) => a - b;
    const multiply = (a, b) => a * b;
    const divide = (a, b) => (b !== 0 ? a / b : 'Error');

    function calculateResult() {
        try {
            const match = input.match(/(-?\d+)\s*([-+*/])\s*(-?\d+)/);
            console.log(match)
            if (!match) {
                setResult('Error');
                return;
            }

            const number1 = Number(match[1]);
            const operator = match[2];

            const number2 = Number(match[3]);

            let calculatedResult;

            switch (operator) {
                case '+':
                    calculatedResult = add(number1, number2);
                    break;
                case '-':
                    calculatedResult = subtract(number1, number2);
                    break;
                case '*':
                    calculatedResult = multiply(number1, number2);
                    break;
                case '/':
                    calculatedResult = divide(number1, number2);
                    break;
                default:
                    calculatedResult = 'Error';
            }

            setResult(calculatedResult.toString());
            setPreviousInput(input);
            setInput(calculatedResult.toString());
        } catch (error) {
            setResult('Error');
        }
    }

    function resetCalculator() {
        setInput('');
        setResult('');
        setPreviousInput('');
    }

    function handleButtonClick(value) {
        if (value === '=') {
            calculateResult();
        } else {
            setInput((prevInput) => prevInput + value);
        }
    }

    return (
        <div className='container'>
            <div className="calculator">
                <div className="display">{input}</div>
                <div className="result">
                    {previousInput !== '' ? `${previousInput} =` : ''} {result}
                </div>
                <div className="buttons">
                    <button onClick={resetCalculator}>C</button>
                    <button onClick={() => handleButtonClick('1')}>1</button>
                    <button onClick={() => handleButtonClick('2')}>2</button>
                    <button onClick={() => handleButtonClick('3')}>3</button>
                    <button onClick={() => handleButtonClick('4')}>4</button>
                    <button onClick={() => handleButtonClick('5')}>5</button>
                    <button onClick={() => handleButtonClick('6')}>6</button>
                    <button onClick={() => handleButtonClick('7')}>7</button>
                    <button onClick={() => handleButtonClick('8')}>8</button>
                    <button onClick={() => handleButtonClick('9')}>9</button>
                    <button onClick={() => handleButtonClick('0')}>0</button>
                    <button onClick={() => handleButtonClick('+')}>+</button>
                    <button onClick={() => handleButtonClick('-')}>-</button>
                    <button onClick={() => handleButtonClick('*')}>*</button>
                    <button onClick={() => handleButtonClick('/')}>/</button>
                    <button onClick={calculateResult}>=</button>
                </div>
            </div>
        </div>
    );
}

export default Home;

