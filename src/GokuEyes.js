import React, { useState, useEffect } from 'react';
import Goku from './images/vegito.png';
import Eyes from './images/eyes.png';
import chatbubble from './images/bubblechat.png';
const GokuEyes = () => {
    const [chat, setchat] = useState(false);
    const [chatmsg, setchatmsg] = useState(['Power comes in response to a need, not a desire.', 'It looks like they only want me, and that’s exactly who they’ll get', 'I am going to be a lot stronger than I ever was!']);
    useEffect(() => {


        const anchor = document.getElementById('anchor');
        const rekt = anchor.getBoundingClientRect();
        const anchorx = rekt.left + rekt.width / 2;
        const anchory = rekt.top + rekt.height / 2;
        document.addEventListener('mousemove', (e) => {
            const mousex = e.clientX;
            const mousey = e.clientY;
            const angleDeg = angle(mousex, mousey, anchorx, anchory);

            const eyes = document.querySelectorAll('.eye');
            eyes.forEach(eye => {
                eye.style.transform = `rotate(${90 + angleDeg}deg)`;

            })
        });
        function angle(cx, cy, ex, ey) {
            const dy = ey - cy;
            const dx = ex - cx;
            const rad = Math.atan2(dy, dx);
            const deg = rad * 180 / Math.PI;
            return deg;
        }

    },);
    const showchatbubble = () => {

        // console.log(chat);

        setchat(true);

    }
    const hidechatbubble = () => {
        //console.log(chatmsg.length);
        // console.log(chat);

        var rnd = [Math.floor(Math.random() * chatmsg.length)];
        // console.log(rnd);
        setchat(false);

    }
    return (
        <div className='flex justify-center '>
            <div>
                <img src={Goku} alt="" id="anchor" className='w-[300px] ' />
                <div className=' flex h-[0px] w relative'>
                    <img src={Eyes} alt="" className='flex absolute z-20 top-[-200px] left-[125px] eye mb-4 w-[25px] ' />
                    <img src={Eyes} alt="" className='flex absolute top-[-200px] left-[170px] eye w-[25px] ' />
                    <div className='mouth flex absolute  w-[20px] h-[15px] top-[-112px] left-[99px] ' onMouseOver={showchatbubble} onMouseOut={hidechatbubble}>

                    </div>
                    {chat ? (
                        <div className="flex">
                            <div className="relative w-[300px] h-[100px] ">
                                <img src={chatbubble} alt="" className="z-[150px] relative top-[-335px] left-[300px]" />
                                <div className="z-[250px] top-[-300px] left-[340px] absolute text-center w-[220px] h-[120px] break-all text-xs flex items-center p-3 font-bold">
                                    {chatmsg[[Math.floor(Math.random() * chatmsg.length)]]}
                                </div>

                            </div>

                        </div>
                    ) : (
                        null
                    )}

                </div>

            </div>
        </div>
    );
}

export default GokuEyes;
