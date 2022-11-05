import React from 'react';

const ReadyRoom = ({ readyplayer, opponentName }) => {
    return (
        <div className='flex justify-center items-center text-3xl text-center'>
            <div>
                <div className='text-5xl'>

                    Game is ready
                </div>
                <div>
                    <div> Username:</div>
                    <div className='font-bold'>

                        {opponentName}
                    </div>
                    <div> has joined the lobby</div>
                </div>
                <div className='bg-[#333] h-[50px] text-white  mt-8 text-center'>
                    <button onClick={readyplayer} className="w-full h-full">
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
