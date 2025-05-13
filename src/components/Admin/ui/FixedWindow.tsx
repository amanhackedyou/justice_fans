import React, { ReactNode } from 'react'
import { IoArrowBack } from 'react-icons/io5'


interface FixedWindowProps {
    title: string,
    children: ReactNode,
    onClose: () => void,
}


const FixedWindow = (props: FixedWindowProps) => {
    return (
        <section onClick={e => {
            if (e.target == e.currentTarget) {
                props.onClose()
            }
        }} className='w-full h-full fixed top-0 left-0 z-30 bg-black/10 backdrop-blur flex justify-center items-center'>
            <div className='flex flex-col w-full h-full bg-white outline-hidden md:w-[40%] md:h-[90%] md:shadow md:rounded-2xl'>
                <div className='p-4 flex gap-3 md:gap-4 h-fit z-20 shadow w-full items-center'>
                    <button onClick={e => props.onClose()} className='text-2xl leading-none hover:text-gray-400 outline-none cursor-pointer active:text-gray-500 text-gray-600'>
                        <IoArrowBack />
                    </button>
                    <span className='text-xl leading-none mt-[1px] font-medium text-gray-600'>{props.title}</span>
                </div>
                <div className='w-full h-full px-4 py-2 overflow-y-auto'>
                    {props.children}
                </div>
            </div>
        </section>
    )
}

export default FixedWindow