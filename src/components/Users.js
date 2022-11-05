import React, { useState } from 'react';

const Users = ({ users, room, username }) => {

    return (
        <div className='bg-[#333] p-3 flex justify-center rounded-lg text-white text-center h-full ml-8'>

            <div>
                <div className='font-bold border-b mt-4 '>
                    Users
                </div>
                <div className='font-thin text-xs flex justify-center text-center mt-2'>

                    <div className='font-thin '>
                        Room :{room}

                    </div>
                </div>

                {users.map(user => {
                    if (user == username) {
                        return (
                            <>
                                <div>
                                    <div className='mt-10'>
                                        You:</div>
                                    <div className='pt-2 px-4 mx-4 mb-6 font-bold'>
                                        {user}
                                    </div>
                                </div>
                            </>
                        )
                    }
                    else {
                        return (
                            <>
                                <div>
                                    <div className='mt-10'>
                                        Opponent: </div>
                                    <div className='pt-2 px-4 mx-4 mb-6 font-bold'>
                                        {user}
                                    </div>
                                </div>
                            </>
                        )
                    }

                })}
            </div>
        </div >

    )
}

export default Users;
