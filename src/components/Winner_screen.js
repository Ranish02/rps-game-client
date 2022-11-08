import React, { useState, useEffect } from 'react';
import { GrPowerReset } from 'react-icons/gr';

const WinnerScreen = ({ winner, username, opponentname, wincount, roundCounter, regame }) => {
    const [counter, setcounter] = useState();
    useEffect(() => {
        const timer = counter > 0 && setInterval(() => setcounter(counter - 1), 1000);
        return () => clearInterval(timer);
    }, [counter]);
    useEffect(() => {
        setcounter(3);

    }, []);

    return (
        <div>

            <div className='w-full'>


                <div>
                    <div className='flex justify-evenly mb-20 font-bold bg-[#FFF] py-2 border-t-2 border-gray-300 w-full '>

                        <div className='text-[#0f0] border-x px-16'>
                            Win
                            <div>
                                {wincount[0]}
                            </div>
                        </div>
                        <div className='text-[#f00] border-x px-16'>
                            Loss
                            <div>
                                {wincount[1]}
                            </div>
                        </div>
                        <div className='text-[#ef0] border-x px-16'>
                            Draw
                            <div>
                                {wincount[2]}
                            </div>
                        </div>
                    </div>

                    <div>
                        Round :
                        {roundCounter}
                    </div>
                    <div className='mystroke'>
                        {
                            username === winner ?
                                (<div className='text-3xl font-bold text-center  text-[#0bfc03]'>
                                    <div>
                                        You Won !!
                                    </div>
                                    <div>
                                        {counter}
                                    </div>
                                    <div>
                                        Winnner:
                                    </div>
                                    <div>
                                        {winner}
                                    </div>
                                    <div className='text-xl'>

                                        <div>
                                            {opponentname}
                                        </div>
                                    </div>
                                    <div className='mt-4'>
                                        <button onClick={regame}><GrPowerReset /></button>
                                    </div>
                                </div>) :
                                (
                                    winner === "Draw" ? (
                                        (<div className='text-3xl font-bold text-center  text-[#ceff1f]'>
                                            <div>
                                                Match Ended in draw
                                            </div>
                                            <div>
                                                {counter}
                                            </div>
                                            <div className='mt-4'>
                                                <button onClick={regame}><GrPowerReset /></button>
                                            </div>

                                        </div>
                                        )
                                    ) : (
                                        (<div className='text-3xl font-bold text-center text-[#fc0303]'>
                                            <div>
                                                You Lost !! Try Again
                                            </div>
                                            <div>
                                                {counter}
                                            </div>
                                            <div>
                                                Winnner:   {winner}
                                            </div>
                                            <div>
                                            </div>
                                            <div className='mt-4'>
                                                <button onClick={regame}><GrPowerReset /></button>
                                            </div>
                                        </div>

                                        )
                                    )

                                )
                        }
                    </div>
                </div>
            </div>






        </div >
    );
}

export default WinnerScreen;
