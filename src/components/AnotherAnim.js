import React, { useEffect } from 'react';

import Rock from '../images/rock.png';
import Scisorrs from '../images/scisorrs.png';
import Paper from '../images/Paper.png';
import Aos from 'aos';
import 'aos/dist/aos.css';

const AnotherAnim = ({ handleGame }) => {
    useEffect(() => {
        Aos.init({
            // duration: 2500,
            // delay: 400,
        })
    }, []);

    return (
        <div className='w-[1000px] h-full flex justify-center items-center'>
            <div className='w-full h-full flex justify-center items-center'>


                <div className='h-[400px] w-[600px] bg-[#65ff8b] flex justify-around items-center'
                    onClick={() => {
                        handleGame(1);
                        console.log("Rock")
                    }}
                >
                    <div className="transform transition duration-120 hover:scale-110">
                        <div data-aos="zoom-in" data-aos-delay="50" className='border-4 border-black transform transition duration-500 hover:scale-110'>
                            <img src={Rock} alt="" className='w-[100px]' />
                        </div>
                    </div>
                    <div className="transform transition duration-200 hover:scale-110"
                        onClick={() => {
                            handleGame(2);
                            console.log("Paper")
                        }}
                    >
                        <div data-aos="zoom-in" data-aos-delay="50" className='border-4 border-black transform transition duration-500 hover:scale-110'>
                            <img src={Paper} alt="" className='w-[100px]' />

                        </div>
                    </div>
                    <div className="transform transition duration-200 hover:scale-110"

                        onClick={() => {
                            handleGame(3);
                            console.log("Scisorrs")
                        }}
                    >
                        <div data-aos="zoom-in" data-aos-delay="50" className='border-4 border-black transform transition duration-500 hover:scale-110'>
                            <img src={Scisorrs} alt="" className='w-[100px]' />

                        </div>
                    </div>

                </div>

            </div>
        </div >
    );
}

export default AnotherAnim;
