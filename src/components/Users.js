import React, { useState } from 'react';

const Users = ({ users, room, username }) => {

    return (
        <div className='p-3 flex justify-center h-full lg:mr-48 '>
            <div className='bg-[#333] rounded-lg text-white text-center  w-[700px] lg:w-full lg:ml-4 pt-8 mt-4 lg:px-8'>
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
