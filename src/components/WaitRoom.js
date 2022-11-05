import React from 'react';
import ScaleLoader from "react-spinners/ScaleLoader";

const WaitRoom = () => {
    return (
        <div className='flex justify-center items-center font-bold text-center text-3xl h-full'>
            <div>
                <div>
                    Room joined
                </div>
                <div>
                    Waiting for a player
                </div>
                <div className='mt-12 flex justify-center' >
                    <ScaleLoader
                        color="black"
                        size={30}
                    />
                </div>
            </div>
        </div>

    );
}

export default WaitRoom;
