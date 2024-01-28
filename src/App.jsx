import {useState} from 'react';
import Chord from './components/Chord';

const App = () => {
  const [chord, setChord] = useState('C');

  return (
    <div className="chord-display">
      <h1>{chord}</h1>
      <Chord chord={chord}/>
    </div>
  )
}

export default App;