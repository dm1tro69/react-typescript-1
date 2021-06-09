import './App.css';
import {useEffect} from "react";
import {connectWithWebSocket} from "./utils/wssConnection/wssConnection";

function App() {

    useEffect(()=> {
        connectWithWebSocket()
    },[])

  return (
    <div className="App">
     Hello react
    </div>
  );
}

export default App;
