import React, { useEffect, useState } from 'react';

import Rock from './images/rock.png';
import Scisorrs from './images/scisorrs.png';
import Paper from './images/Paper.png';

import Aos from 'aos';
import 'aos/dist/aos.css';
import GameInput from './components/GameInput';

const Game = ({ handleGame }) => {
    const [GameState, setGameState] = useState("menu");
    return (
        <>

            {
                GameState == "menu" ?
                    (
                        <GameInput handleGame={handleGame} />
                    )
                    : GameState == "Ola" ? (
                        <div>
                            Ola
                        </div>
                    )
                        : (
                            <div>
                                no data
                            </div>

                        )
            }
        </>
    );
}
// <div className='test-buttons hidden'>
//     <div className='bg-[#333] text-white p-2 mt-8 text-center'>
//         <button onClick={Debugger}>
//             Debugger
//         </button>
//     </div>
//     <div className='bg-[#333] text-white p-2 mt-8 text-center'>
//         <button onClick={SendAllInput}>
//             Send All input
//         </button>
//     </div>
// </div>
//     <div className='bg-[#333] text-white p-2 mt-8 text-center'>
//     <button onClick={UpdateGameInput}>
//         Update Input
//     </button>
// </div>

export default Game;
