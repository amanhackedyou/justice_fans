"use client"

import { useSideBarContext } from '@/context/SideBarContext'
import { AppData } from '@/utils/appdata'
import Hamburger from 'hamburger-react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { IoMdArrowBack } from 'react-icons/io'

interface NavBarActions {
    icon?: React.ReactNode,
}

const NavBar = ({ title = AppData.name, isShowing = true, hasBackButton = false, actions = [] }: { title?: string, hasBackButton?: boolean, actions?: NavBarActions[], isShowing?: boolean }) => {
    const sideBarContext = useSideBarContext();

    return (
        <nav className={`flex items-center p-2 md:p-4 md:px-10  fixed top-0 left-0 right-0  z-20 ${isShowing ? "bg-white shadow-md" : "bg-white/40 backdrop-blur-sm opacity-70"} transition-all duration-200 ease-in-out`}>
            <div className='flex items-center gap-2'>
                {/* {hasBackButton && (
                    <button className='mr-4'>
                        <FaArrowLeft className='text-xl' />
                    </button>
                )} */}

                <div className='md:hidden'>
                    <Hamburger size={28} toggled={sideBarContext.isMenuOpened} toggle={sideBarContext.setIsMenuOpened} />
                </div>
                <h1 className='text-2xl font-semibold text-pink-600'>{title}</h1>
            </div>
            <div className='ml-auto flex space-x-4'>
                {actions.map((action, index) => (
                    <button key={index} onClick={() => { }} className='text-gray-400  text-2xl'>
                        {action.icon}
                    </button>
                ))}
            </div>
        </nav>
    )
}

export const SeconderyNavBar = ({ title = AppData.name, hasBackButton = false, actions = [] }: { title?: string, hasBackButton?: boolean, actions?: NavBarActions[] }) => {
    const router = useRouter()

    return (
        <nav className='flex items-center p-4 shadow z-10 bg-white'>
            <div className='flex items-center'>
                {hasBackButton && (
                    <button onClick={e => router.back()} className='mr-4 cursor-pointer hover:text-gray-500 transition-all'>
                        <IoMdArrowBack className='text-2xl' />
                    </button>
                )}
                <h1 className='text-xl font-medium leading-none'>{title}</h1>
            </div>
            <div className='ml-auto flex space-x-4'>
                {actions.map((action, index) => (
                    <button key={index} onClick={() => { }} className='text-gray-400  text-2xl'>
                        {action.icon}
                    </button>
                ))}
            </div>
        </nav>
    )
}

export default NavBar