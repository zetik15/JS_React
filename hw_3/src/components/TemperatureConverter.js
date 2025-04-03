import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './TemperatureConverter.css';
import { useState, useEffect } from 'react';

export default function TemperatueConverter() {
    const [celsius, setCelsius] = useState(0);
    const [fahrenheit, setFahrenheit] = useState(0);

    const handleCheckInputCelcius = (e) => {
        const newCelsius = Number(e.target.value);
        setCelsius(newCelsius);
        setFahrenheit(Number(((newCelsius * 9 / 5) + 32).toFixed(2)));
    }
    
    const handleCheckInputFahrenheit = (e) => {
        const newFahrenheit = Number(e.target.value);
        setFahrenheit(newFahrenheit);
        setCelsius(Number(((newFahrenheit - 32) * 5 / 9).toFixed(2)));
    }

    const handleKeyDown = (e) => {
        const allowedKeys = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab', '.', ','];

        if (!/^\d$/.test(e.key) && !allowedKeys.includes(e.key)) {
            e.preventDefault();
        }
    }

    const reset = () => {
        setCelsius('');
        setFahrenheit('');
    }

    return (
        <div className="temp-container">
            <h2 className="temp-title">Конвертер температуры</h2>
            <div className="temp-inputGroup">
                <div className="temp-inputField">
                    <TextField id="celsius" onChange={handleCheckInputCelcius} onKeyDown={handleKeyDown} label="Цельсий" variant="standard" fullWidth value={celsius}/>
                </div>
                <div className="temp-inputField">
                    <TextField id="fahrenheit" label="Фаренгейт" variant="standard" fullWidth value={fahrenheit} onChange={handleCheckInputFahrenheit} onKeyDown={handleKeyDown}/>
                </div>
            </div>
            <div className="temp-buttonGroup">
                <Button className="temp-resetButton" variant="outlined" onClick={reset}>Сбросить</Button>
            </div>
        </div>
    )
}