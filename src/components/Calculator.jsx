import React, { useState } from 'react';

function Calculator() {
    const [display, setDisplay] = useState('');

    const handleClick = (e) => {
        const value = e.target.innerText;
        if (value === 'C') {
            setDisplay('');
        } else if (value === '=') {
            try {
                setDisplay(eval(display).toString());
            } catch {
                setDisplay('Error');
            }
        } else {
            setDisplay(display + value);
        }
    };

    return (
        <div className="calculator drop-shadow-md rounded-2xl">
            <div className="display rounded-t-2xl">{display}</div>
            <div className="buttons">
                <button onClick={handleClick}>1</button>
                <button onClick={handleClick}>2</button>
                <button onClick={handleClick}>3</button>
                <button onClick={handleClick}>+</button>
                <button onClick={handleClick}>4</button>
                <button onClick={handleClick}>5</button>
                <button onClick={handleClick}>6</button>
                <button onClick={handleClick}>-</button>
                <button onClick={handleClick}>7</button>
                <button onClick={handleClick}>8</button>
                <button onClick={handleClick}>9</button>
                <button onClick={handleClick}>*</button>
                <button onClick={handleClick}>.</button>
                <button onClick={handleClick}>0</button>
                <button onClick={handleClick}>/</button>
                <button className='text-[#D80000]' onClick={handleClick}>C</button>
                <button className='col-span-2 bg-[#1eb3d4]' onClick={handleClick}>=</button>
            </div>
        </div>
    );
};
export default Calculator;
