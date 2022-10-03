import './App.css';
import React,{useState} from 'react';
import Home from './components/Home';
import blueBlob from "./assets/blue-blob.png"
import yellowBlob from "./assets/yellow-blob.png"
import Questions from './components/QuestionsPage';
function App() {
  const [showOverlay, setShowOverlay] = useState(true);

  function toggleStart(){
    setShowOverlay((prev)=>!prev);
  }
  return (
    <div className="App">
      <img className="blueBlob" src={blueBlob} alt='blue blob' />
      <img className="yellowBlob" src={yellowBlob} alt='yellow blob' />
     {showOverlay ? 
     <Home toggle={toggleStart} /> 
    :
    <Questions toggle={toggleStart} />
    }
     
     
    </div>
  );
}

export default App;
