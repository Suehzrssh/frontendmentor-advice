import Axios from 'axios';
import { useEffect, useState } from 'react';
import "./App.scss";
import divider from './images/pattern-divider-desktop.svg';
import dice from './images/icon-dice.svg';

function App() {
  const [advice, setAdvice] = useState();

  const handleClick = async () => {
    await Axios.get('https://api.adviceslip.com/advice').then((res) => {
      setAdvice(res.data.slip);
    });
  }

  useEffect(() => {
    handleClick();
  },[]);

  return (
    <div className="App">
      <div className="container">
        <h2>advice #{advice?.id}</h2>
        <p>{advice?.advice}</p>
        <div className="divider">
          <img src={divider} alt="" />
        </div>
        <div className="dice" onClick={handleClick}>
          <img src={dice} alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
