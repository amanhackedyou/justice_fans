"use client"

import { AppData } from '@/utils/appdata'
import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'

interface NavBarActions {
    icon?: React.ReactNode,
}

const NavBar = ({ title = AppData.name, isShowing = true, hasBackButton = false, actions = [] }: { title?: string, hasBackButton?: boolean, actions?: NavBarActions[], isShowing?: boolean }) => {
    return (
        <nav className={`flex items-center p-4 md:px-10 shadow-md fixed top-0 left-0 right-0  z-20 ${isShowing ? "bg-white" : "bg-white/40 backdrop-blur-sm opacity-50"} transition-all duration-200 ease-in-out`}>
            <div className='flex items-center'>
                {hasBackButton && (
                    <button className='mr-4'>
                        <FaArrowLeft className='text-xl' />
                    </button>
                )}
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
    return (
        <nav className='flex items-center p-4 shadow z-10'>
            <div className='flex items-center'>
                {hasBackButton && (
                    <button className='mr-4'>
                        <FaArrowLeft className='text-xl' />
                    </button>
                )}
                <h1 className='text-xl font-semibold'>{title}</h1>
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