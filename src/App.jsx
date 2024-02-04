import {useState} from 'react';
import Chord from './components/Chord';
import ChordOptions from './components/ChordOptions';
import { useGlobalContext } from './context';

const App = () => {
  //const [chord, setChord] = useState('C');
  const { guitarChord } = useGlobalContext();

  return (
    <div className="chord-display">
      <ChordOptions/>
      <h1>{guitarChord}</h1>
      <Chord chord={guitarChord}/>
    </div>
  )
}

export default App;