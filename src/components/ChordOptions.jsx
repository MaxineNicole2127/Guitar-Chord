import { useGlobalContext } from "../context";

const ChordOptions = () => {
    const { getChord, guitarChord } = useGlobalContext();
    return (
        <div className="main-chords">
            <button className={(guitarChord == 'C') ? "chosenChord main-chord" : "main-chord"} onClick={() => getChord('C')}>C</button>
            <button className={(guitarChord == 'D') ? "chosenChord main-chord" : "main-chord"} onClick={() => getChord('D')}>D</button>
            <button className={(guitarChord == 'E') ? "chosenChord main-chord" : "main-chord"} onClick={() => getChord('E')}>E</button>
            <button className={(guitarChord == 'F') ? "chosenChord main-chord" : "main-chord"} onClick={() => getChord('F')}>F</button>
            <button className={(guitarChord == 'G') ? "chosenChord main-chord" : "main-chord"} onClick={() => getChord('G')}>G</button>
            <button className={(guitarChord == 'A') ? "chosenChord main-chord" : "main-chord"} onClick={() => getChord('A')}>A</button>
            <button className={(guitarChord == 'B') ? "chosenChord main-chord" : "main-chord"} onClick={() => getChord('B')}>B</button>
        </div>
    )
}

export default ChordOptions;