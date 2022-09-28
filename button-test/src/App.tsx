import React, {useState} from 'react';
import './App.css';

function App() {

    const [count, setCountUp] = useState(0);
    const [data, setData] = useState("");


    const onButtonPressedAdd = () => {
        setCountUp(count + 1);
    }

    const onButtonPressedSub = () => {
        setCountUp(count - 1);
    }

    return (
        <div className="App">
            <h3>Ich hätte gerne </h3>
            <h1>{count}</h1>
            <h1>{data}</h1>

            <input onChange={(event) => setData(event.target.value)}/>

            <button onClick={onButtonPressedAdd}>+</button>
            <button onClick={onButtonPressedSub}>-</button>
        </div>
    );
}

export default App;
