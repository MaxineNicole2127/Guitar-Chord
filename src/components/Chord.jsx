import { useState } from 'react';
import Circle from './Circle';

const Chord = ({chord}) => {
    const [strings, setStrings] = useState('X 3 2 0 1 0');
    // const [strings, setStrings] = useState('1 X 2 2 1 0');
    // const [strings, setStrings] = useState('3 2 0 0 3 3'); // for G 
    const string_array = strings.split(" ");
    return (
      <table className="chord">
        <tr> {/* first*/}
          <td>
            { string_array[0] == '3' && <Circle/>}
          </td>
          <td>
            { string_array[0] == '2' && <Circle/>}
          </td>
          <td className="dark-rectangle">
            { string_array[0] == '1' && <Circle/>}
          </td>
          { string_array[0] == 'X'  && <div className="extra">X</div>}
          { string_array[0] == '0'  && <div className="extra">O</div>}
        </tr>

        <tr> {/* second*/}
          <td>
              { string_array[1] == '3' && <Circle/>}
            </td>
            <td>
              { string_array[1] == '2' && <Circle/>}
            </td>
            <td className="dark-rectangle">
              { string_array[1] == '1' && <Circle/>}
            </td>
            { string_array[1] == 'X'  && <div className="extra">X</div>}
            { string_array[1] == '0'  && <div className="extra">O</div>}
        </tr>

        <tr> {/* third */}
          <td>
            { string_array[2] == '3' && <Circle/>}
          </td>
          <td>
            { string_array[2] == '2' && <Circle/>}
          </td>
          <td className="dark-rectangle">
            { string_array[2] == '1' && <Circle/>}
          </td>
          { string_array[2] == 'X'  && <div className="extra">X</div>}
          { string_array[2] == '0'  && <div className="extra">O</div>}
        </tr>

        <tr> {/*fourth */}
          <td>
            { string_array[3] == '3' && <Circle/>}
          </td>
          <td>
            { string_array[3] == '2' && <Circle/>}
          </td>
          <td className="dark-rectangle">
            { string_array[3] == '1' && <Circle/>}
          </td>
          { string_array[3] == 'X'  && <div className="extra">X</div>}
          { string_array[3] == '0'  && <div className="extra">O</div>}
        </tr>

        <tr> {/*fifth*/}
          <td>
            { string_array[4] == '3' && <Circle/>}
          </td>
          <td>
            { string_array[4] == '2' && <Circle/>}
          </td>
          <td className="dark-rectangle">
            { string_array[4] == '1' && <Circle/>}
          </td>
          { string_array[4] == 'X'  && <div className="extra">X</div>}
          { string_array[4] == '0'  && <div className="extra">O</div>}
        </tr> {/* sixth*/}
        <tr className='last-row'>
          <td style={{ border: 'none'}}>
            { string_array[5] == '3' && <Circle/>}
          </td>
          <td style={{ border: 'none'}}>
            { string_array[5] == '2' && <Circle/>}
          </td>
          <td style={{ border: 'none'}}>
            { string_array[5] == '1' && <Circle/>}
          </td>
          { string_array[5] == 'X'  && <div className="extra">X</div>}
          { string_array[5] == '0'  && <div className="extra">O</div>}
        </tr>
      </table>
    )
  }
  
export default Chord;

// "strings": "X 3 2 0 1 0"