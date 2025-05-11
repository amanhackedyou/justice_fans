"use client"

import React, { useState } from 'react'
import AboutUs from '../AboutUs/page';
import { FaArrowLeft, FaRegShareSquare } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { IoMdArrowBack } from 'react-icons/io';
import { GoVerified } from 'react-icons/go';
import { HiPhoto } from 'react-icons/hi2';
import { TbPhoto, TbVideo } from 'react-icons/tb';
import { FiPackage } from 'react-icons/fi';
import { PiShareNetwork, PiShareNetworkFill } from 'react-icons/pi';
import { LuTvMinimalPlay } from 'react-icons/lu';
import MediaView from './MediaView';
import PremiumPackageView from './PremiumPackageSection';

const ProfilePage = () => {
    const [tab, setTab] = useState("Free");

    const router = useRouter();

    return (
        <div className='w-full flex items-start h-full '>
            {/* <NavBar isShowing={scrollPosition < 10} /> */}



            <main className='w-full md:w-[40vw] md:min-w-[40vw] md:max-w-[40vw] h-full overflow-y-auto custom-scroll'>
                <header style={{ backgroundImage: `url('/images/dev/header_image1.jpg')` }} className='h-44 bg-red-200 bg-center bg-cover w-full'>
                    <nav className='h-[35%] from-black/50 to-black/0 bg-gradient-to-b w-full px-4 text-white flex items-center gap-3'>
                        <button onClick={e => router.back()} className='text-2xl cursor-pointer'>
                            <IoMdArrowBack />
                        </button>

                        <div className='flex flex-col'>
                            <div className='flex items-center gap-1'>
                                <span className='text-xl font-semibold'>Kitty 💋🐱</span>
                                <GoVerified className='text-xl mt-px text-pink-500-' />
                            </div>

                            <div className='flex items-center gap-2'>
                                <div className='flex items-center gap-1'>
                                    <TbPhoto className='text-lg' />
                                    <span className='leading-none text-sm'>273</span>
                                </div>
                                <div className='w-1 min-1 max-1 aspect-square rounded-full bg-white/70'></div>

                                <div className='flex items-center gap-1'>
                                    <TbVideo className='text-xl' />
                                    <span className='leading-none text-sm'>24</span>
                                </div>
                                <div className='w-1 min-1 max-1 aspect-square rounded-full bg-white/70'></div>

                                <div className='flex items-center gap-1'>
                                    <FiPackage className='text-lg' />
                                    <span className='leading-none text-sm'>1</span>
                                </div>
                                {/* <div className='w-1 min-1 max-1 aspect-square rounded-full bg-white/70'></div> */}
                            </div>
                        </div>
                    </nav>
                </header>


                <section className='flex flex-col px-4 border-b pb-2 border-gray-200'>
                    <div className='flex items-center justify-between bg-red-200- h-[3.5rem]'>
                        <div className='w-28 min-w-28 max-w-28 aspect-square rounded-full border-2 border-white -translate-y-8 relative'>
                            <img className=' w-full h-full rounded-full object-center object-cover' src="/images/dev/1.jpg" alt="Profile picture" />
                            <div className='w-4 border border-white aspect-square rounded-full bg-green-500 absolute bottom-2 right-2'></div>
                        </div>

                        <button className='border-2 w-11 max-w-11 min-w-11 rounded-full aspect-square cursor-pointer transition-all hover:bg-pink-500/5 hover:border-pink-500 border-gray-200 text-2xl flex justify-center items-center text-pink-500'>
                            <PiShareNetworkFill />
                        </button>
                    </div>

                    <div className='w-full'>
                        <div className='flex items-center gap-1'>
                            <span className='text-xl font-semibold'>Kitty 💋🐱</span>
                            <GoVerified className='text-xl mt-px text-pink-500' />
                        </div>

                        <div className='flex items-center gap-2'>
                            <span className='text-sm text-gray-500 font-medium'>@kitten_lover</span>
                        </div>
                    </div>
                </section>


                <TabBar currentTab={tab} setTab={setTab} />

                <section className='flex flex-col min-h-screen'>
                    {tab === "Free" ? <MediaView /> : <div className='flex items-center justify-center w-full h-full' />}
                </section>
            </main>

            <PremiumPackageView />
        </div>
    )
}

const TabBar = ({ currentTab, setTab }) => {
    const TabItem = ({ Icon, text }: { Icon: React.ReactNode, text: string }) => {
        return (
            <button className={`flex items-center gap-1 cursor-pointer ${currentTab === text ? "text-pink-500 font-semibold" : "hover:text-black text-gray-500"}  transition-all duration-200 rounded-full`} onClick={e => setTab(text)}>
                <span className='text-2xl'>{Icon}</span>
                <span className='text-sm font-medium- leading-none'>{text}</span>
            </button>
        )
    }
    return (
        <div className='flex items-center justify-between- gap-6 w-full border-b- border-gray-200- px-4 py-2'>
            <TabItem Icon={<LuTvMinimalPlay />} text='Free' />
            {/* <TabItem Icon={<TbVideo className='text-3xl' />} text='Videos' /> */}
            <TabItem Icon={<FiPackage />} text='Premium Packages 🥵' />
        </div>
    )
}

export default ProfilePage;