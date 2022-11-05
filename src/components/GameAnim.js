import React, { useState } from 'react';
import Rock from '../images/rock.png';
import Scisorrs from '../images/scisorrs.png';
import Paper from '../images/Paper.png';

import { useTransition, animated } from 'react-spring';

const GameAnim = ({ handleGame }) => {
    const [isivisible, setIsVisible] = useState();
    const transition = useTransition(isivisible, {
        from: { x: -400, y: 1200, opacity: 0 },
        enter: { x: -0, y: 0, opacity: 1 },
        leave: {},

    })
    return (
        <div>
            <div className='bg-[#adadad] text-white p-2 mt-8 text-center'>
                <button onClick={() => {
                    setIsVisible(v => !v);
                }}>
                    Mount
                </button>
            </div>
            {transition((style, item) => item ? (
                <animated.div className='h-[200px] w-[400px] bg-[#333] flex justify-around items-center' style={style}>
                    <div className='' onClick={() => {
                        // handleGame(1);
                        console.log("Rock")
                    }}>
                        <img src={Rock} alt="" className='w-[100px]' />
                    </div>
                    <div onClick={() => {
                        //handleGame(2);
                        console.log("Paper")
                    }}>
                        <img src={Paper} alt="" className='w-[100px]' />
                    </div>
                    <div onClick={() => {
                        // handleGame(3);
                        console.log("Scisors")
                    }}>
                        <img src={Scisorrs} alt="" className='w-[100px]' />
                    </div>

                </animated.div>
            ) : ''
            )}

            {/* {isivisible ? (
                <div className='h-[200px] w-[400px] bg-[#333] flex justify-around items-center'>
                    <div className='' onClick={() => {
                        // handleGame(1);
                        console.log("Rock")
                    }}>
                        <img src={Rock} alt="" className='w-[100px]' />
                    </div>
                    <div onClick={() => {
                        //handleGame(2);
                        console.log("Paper")
                    }}>
                        <img src={Paper} alt="" className='w-[100px]' />
                    </div>
                    <div onClick={() => {
                        // handleGame(3);
                        console.log("Scisors")
                    }}>
                        <img src={Scisorrs} alt="" className='w-[100px]' />
                    </div>

                </div>
            ) : ''} */}

        </div>
    );
}

export default GameAnim;
