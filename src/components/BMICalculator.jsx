import { useState } from "react";
import "../App.css";
import obese from "../assets/obese.jpg";
import normal from "../assets/normal.jpg";
import underweight from "../assets/underweight.jpg";


function BMICalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState("");

  const calculateBMI = () => {
    if (!weight || !height) {
      alert("Please enter valid values");
      return;
    }

    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height);

    if (weightNum <= 0 || heightNum <= 0) {
      alert("Values must be greater than 0");
      return;
    }

    const heightInMeters = heightNum / 100;
    const bmiValue = weightNum / (heightInMeters * heightInMeters);

    setBmi(bmiValue.toFixed(2));

    if (bmiValue < 18.5) setStatus("Underweight");
    else if (bmiValue < 24.9) setStatus("Normal");
    else setStatus("Obese");
  };

  const resetFields = () => {
    setWeight("");
    setHeight("");
    setBmi(null);
    setStatus("");
  };

  return (
    <div className="container">
      <h1>BMI Calculator</h1>

      <input
        type="number"
        placeholder="Enter weight (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter height (cm)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />

      <button onClick={calculateBMI}>Calculate BMI</button>
      <button className="reset" onClick={resetFields}>
        Reset
      </button>

      {bmi !== null && (
        <div className="result">
          <h2>Your BMI: {bmi}</h2>
          <p>Status: {status}</p>
          
              {status === "Underweight" && (
      <img src={underweight} alt="Underweight" className="bmi-img" />
    )}

    {status === "Normal" && (
      <img src={normal} alt="Normal weight" className="bmi-img" />
    )}

    {status === "Obese" && (
      <img src={obese} alt="Obese" className="bmi-img" />
    )}
        </div>
      )}
    </div>
  );
}

export default BMICalculator;