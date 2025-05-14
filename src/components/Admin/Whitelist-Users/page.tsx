"use client"

import React, { useState } from 'react'
import { FiTrash2 } from 'react-icons/fi'
import { IoMdAdd } from 'react-icons/io'

interface WhitelistUsersProps {
    whitelistUsers: string[]
}


const WhitelistUsers = (props: WhitelistUsersProps) => {
    const [email, setEmail] = useState("");
    const [whitelistUsers, setWhitelistUsers] = useState(props.whitelistUsers);


    const isValidForm = (email.length > 3 && email.includes("@") && email.includes(".com")) && !whitelistUsers.includes(email);

    return (
        <section className='flex flex-col w-full h-full md:w-[60%]'>
            <div className='flex flex-col gap-2'>
                <h1 className='font-medium text-2xl text-gray-600'>Whitelist Users</h1>
                <p className='text-sm text-gray-600'>Whitelisting a user gives them lifetime access to all premium features, which remains active until they are removed from the whitelist.</p>
            </div>
            <div className='flex items-center mt-6'>
                <div className="relative mb-4 w-full">
                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email Address</label>
                    <div className='flex items-center w-full gap-4'>
                        <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder='Email' id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        <button onClick={e => {
                            if (isValidForm) {
                                const newWhitelist = [email, ...whitelistUsers];
                                setWhitelistUsers(newWhitelist);
                            }
                        }} className={`text-white ${isValidForm ? "bg-pink-500 hover:bg-pink-600 cursor-pointer" : "bg-pink-500/50 cursor-not-allowed"}   border-0 py-2 px-8 focus:outline-none  rounded text-lg flex items-center gap-2`}><IoMdAdd /> ADD</button>
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-4 h-full'>
                {whitelistUsers.length === 0 && <div className='w-full h-full grid place-items-center'>
                    <p className='text-sm text-gray-600 w-full text-center'>The whitelist is currently empty. No users have been granted premium access yet.</p></div>}

                {whitelistUsers.map((email, i) => {
                    return <WhitelistCard key={email} email={email} onRemoveClick={() => {
                        const newWhitelist = whitelistUsers.filter((e) => e != email);
                        setWhitelistUsers(newWhitelist);
                    }} />
                })}

            </div>
        </section>
    )
}


const WhitelistCard = ({ email, onRemoveClick }: { email: string, onRemoveClick: () => void }) => {
    return (
        <div className="bg-white shadow-md hover:shadow-xl transition-shadow rounded-2xl p-4 flex items-center justify-between border border-zinc-200">
            <div className="text-zinc-800 font-medium text-base truncate max-w-[80%]">
                {email}
            </div>
            <button
                onClick={onRemoveClick}
                className="text-red-500 hover:text-red-600 transition-colors p-2 rounded-full hover:bg-red-100 cursor-pointer active:bg-red-200"
                aria-label="Remove from whitelist"
            >
                <FiTrash2 size={20} />
            </button>
        </div>
    );
}

export default WhitelistUsers