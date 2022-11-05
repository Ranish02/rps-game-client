import React, { useState, useEffect } from 'react';
import GameManager from './GameManager';

const Socketcmd = ({ socket, username, room }) => {
    const [messages, setmessages] = useState([]);
    const [users, setusers] = useState([]);

    const [currentmessage, setcurrentmessage] = useState("");
    const [time, settime] = useState(0);

    const sendmessage = async () => {

        //console.log(messages);
        if (currentmessage !== null && username !== null) {
            const messagedata = {
                room: room,
                author: username,
                message: currentmessage,
                time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes(),
            }
            //alert("messagedata" + messagedata.message + messagedata.room + messagedata.author + messagedata.time);
            await socket.emit("send_message", messagedata);
            console.log(messagedata);
            setmessages((list) => [...list, messagedata]);
        }

    }
    useEffect(() => {
        // alert("useeffect message");
        socket.on("received_message", (data) => {
            console.log("received data" + data);
            setmessages((list) => [...list, data]);
        })
    }, [socket]);
    socket.on('updateUsersList', (users) => {
        //console.log(users);
        console.log("received data" + users);
        setusers(users);
    }
    )
    const startgame = async () => {
        console.log("Game start initialized");
        await socket.emit("startGame",);
    }


    // const starter = setInterval(() => {
    //     console.log('Interval triggered');
    // }, 1000);
    const starttimer = () => {
        setcounter(10);
    }
    const readyplayer = async () => {
        await socket.emit("readyplayer", username);
    }

    const [counter, setcounter] = useState(10);
    useEffect(() => {
        const timer = counter > 0 && setInterval(() => setcounter(counter - 1), 1000);
        return () => clearInterval(timer);
    }, [counter]);




    return (
        <>
            <div className='bg-[#9c9c9c] w-screen h-96 flex justify-center items-center'>
                <div>
                    <div>
                        <input type="text" className='p-2' placeholder='Message' onChange={(event) => { setcurrentmessage(event.target.value) }} />
                    </div>
                    <div className='bg-[#333] text-white p-2 mt-8 text-center'>
                        <button onClick={sendmessage}>
                            Send
                        </button>
                    </div>
                </div>


            </div>
            <div>
                <button onClick={sendmessage}>
                    Send
                </button>
            </div>

            <div>
                <button onClick={starttimer}>
                    Start Timer
                </button>
            </div>
            <div>
                {counter}
            </div>

            <div>
                {messages.map((messagedata) => {
                    return (
                        <div className='h-[100px] bg-[#333]'>
                            {messagedata.message}
                        </div>
                    )
                })}
            </div>
            <div>
                <GameManager socket={socket} username={username} room={room} users={users} />
            </div>
            <div>
                {users.map((users) => {
                    return (
                        <div className='h-[100px] bg-[#333]'>
                            {users}
                        </div>
                    )
                })}
            </div>
        </>
    );
}

export default Socketcmd;
