import React, { useState, useEffect } from 'react';

const ReadyRoom = ({ readyplayer, opponentName }) => {
    const [active, setActive] = useState(false);
    const readyplayerA = () => {
        setActive(!active);
        readyplayer();
    };
    return (
        <div className='flex justify-center items-center text-3xl text-center h-full'>
            <div>
                <div className='text-5xl'>

                    Game is ready
                </div>
                <div>
                    <div> Username:</div>
                    <div className='font-bold text-[#ff2a2a]'>

                        {opponentName}
                    </div>
                    <div> has joined the lobby</div>
                </div>
                <div className='bg-[#333] h-[50px] text-white  mt-8 text-center' id='btn'
                    style={{ backgroundColor: active ? "#2cff48" : "#333" }}
                >
                    <button onClick={readyplayerA} className="w-full h-full">
                        Ready
                    </button>
                </div>
                <div>

                </div>


            </div>
        </div>
    );
}


export default ReadyRoom;
