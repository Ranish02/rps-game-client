import React, { useState, useEffect } from 'react';
import Socketcmd from './Socketcmd';
const Chat = ({ socket }) => {

    const [username, setusername] = useState("Username2");
    const [room, setroom] = useState("global");

    const [showjoinroom, setshowjoinroom] = useState(false);
    const joinroom = () => {
        if (username !== "" && room !== "") {
            const userdata = {
                username: username,
                room: room
            };
            socket.emit("join_room", userdata);
            setshowjoinroom(false);
        }
        else {
            console.log("data error");
        }
    }





    return (
        <div>
            {showjoinroom ? (
                <div className='bg-[#9c9c9c] w-screen h-screen flex justify-center items-center'>
                    <div>
                        <div>
                            <input type="text" className='p-2' placeholder='User123' onChange={(event) => { setusername(event.target.value) }} />
                        </div>
                        <div className='mt-8'>
                            <input type="text" className='p-2' placeholder='room123' onChange={(event) => { setroom(event.target.value) }} />
                        </div>
                        <div className='bg-[#333] text-white p-2 mt-8 text-center'>
                            <button onClick={joinroom}>
                                Join
                            </button>
                        </div>
                    </div>

                </div>
            ) : (
                <Socketcmd socket={socket} username={username} room={room} />
            )}


        </div>
    );
}

export default Chat;
