import React, { useState, useEffect } from 'react';
import '../css/calculator.css';

export default function Calculator() {
    const [height, setHeight] = useState(180);
    const [weight, setWeight] = useState(80);
    const [BMI, setBMI] = useState(0);
    const [resultBMI, setResultBMI] = useState('');

    useEffect(() => {
        calculateBMI();
    }, [height, weight]);

    function calculateBMI() {
        let BMI = weight / ((height/100) * (height/100));
        setBMI(BMI.toFixed(2));
        setResultBMI(outputBMI(BMI));
    }

    function outputBMI(BMI) {
        switch(true) {
            case (BMI < 16):
                return 'ťažká podvíživa';
            case (BMI < 17):
                return 'stredná podvíživa';
            case (BMI < 18.5):
                return 'mierna podvíživa';
            case (BMI < 25):
                return 'normálna hmotnosť';
            case (BMI < 30):
                return 'mierna nadváha';
            case (BMI < 35):
                return 'obezita 1. stupňa';
            case (BMI < 40):
                return 'obezita 2. stupňa';
            case (BMI >= 40):
                return 'obezita 3. stupňa';
        }
    }

    return (
        <div>
            <h1> BMI kalkulačka <i class="bi bi-calculator"></i> </h1>
            <h3> Zadaj vaše telesné hodnoty: </h3>

            <div className="sections">    
                <label>Výška</label> <br></br>
                <input id="heightR" type="range" min="50" max="220" value={height} onChange={e => setHeight(e.target.value)} />
                <input id="heightN" type="number" min="50" max="220" value={height} onChange={e => setHeight(e.target.value)} />
                <label> &nbsp; cm</label>                
            </div>

            <div className="sections">
                <label>Váha</label><br></br>
                <input id="weightR" type="range" min="50" max="220" value={weight} onChange={e => setWeight(e.target.value)} />
                <input id="weightN" type="number" min="50" max="220" value={weight} onChange={e => setWeight(e.target.value)} />
                <label> &nbsp; kg</label>
            </div>

            <br />
            <button className="calculateButton" id="calculateButton" onClick={calculateBMI}>Vypočítaj</button>
            <div className="itemy"></div>

            <br />
            <p className="resPa" id="result">Vaše BMI je:<a className="bold">{BMI}</a>, čo je <a className="bold">{resultBMI}</a> .</p>
            <br /><br /><br /><br />
        </div>
    );
}
