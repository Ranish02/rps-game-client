import React from "react";
import GokuEyes from "./GokuEyes";
import chatbubble from './images/bubblechat.png';
import { useState, useEffect } from 'react';

import io from 'socket.io-client';
import Chat from "./Chat";
import GameManager from "./GameManager";
import AnotherAnim from "./components/AnotherAnim";

import Game from "./Game";

const socket = io.connect("https://rps-server-backend123.herokuapp.com/");
function App() {
  const [isivisible, setIsVisible] = useState(false);

  return (
    <div >
      {/* <div className='bg-[#adadad] text-white p-2 text-center'>
        <button onClick={() => {
          setIsVisible(v => !v);
        }}>
          Mount 
        </button>
      </div> */}
      <div className="">
        {/* <Chat socket={socket} /> */}
        {/* <GokuEyes /> */}
        {isivisible ? ('') : ''}
        <GameManager socket={socket} />



        {/* <GameManager socket={socket} /> */}


      </div>
      <div className="text-right mt-32 lg:mt-0">
        by
        <a href="https://ranishkunwar.com.np/"> Ranish Kunwar</a>
      </div>

    </div>
  );
}

export default App;
