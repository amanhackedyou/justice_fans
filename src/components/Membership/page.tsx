"use client"

import React, { useState } from 'react'
import Post from '../Post';
import AboutUs from '../AboutUs/page';
import { IoMdArrowBack } from 'react-icons/io';
import { GoVerified } from 'react-icons/go';
import { TbPhoto, TbVideo } from 'react-icons/tb';
import { FiPackage } from 'react-icons/fi';
import { useRouter } from 'next/navigation';
import { PiShareNetworkFill } from 'react-icons/pi';
import { CiDiscount1 } from 'react-icons/ci';
import { RiDiscountPercentLine } from 'react-icons/ri';

const MemberShipPage = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    const [isLiked, setIsLiked] = useState(false);
    const [isSaved, setIsSaved] = useState(false);

    const router = useRouter();


    return (
        <div className='w-full flex items-start h-full '>
            {/* <NavBar isShowing={scrollPosition < 10} /> */}



            <main onScroll={e => {
                setScrollPosition(e.currentTarget.scrollTop);
            }} className='w-full pt-16- md:w-[40vw] md:min-w-[40vw] md:max-w-[40vw] h-full overflow-y-auto custom-scroll'>

                <header style={{ backgroundImage: `url('/images/dev/header_image1.jpg')` }} className='h-44 bg-red-200 bg-center bg-cover w-full'>
                    <nav className='h-[35%] from-black/50 to-black/0 bg-gradient-to-b w-full px-4 text-white flex items-center gap-3'>
                        <button onClick={e => router.back()} className='text-2xl cursor-pointer'>
                            <IoMdArrowBack />
                        </button>

                        <div className='flex flex-col'>
                            <div className='flex items-center gap-1'>
                                <span className='text-xl font-semibold uppercase'>Gold 90% off</span>
                                <RiDiscountPercentLine className='text-2xl mt-px text-pink-500-' />
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
                                {/* <div className='w-1 min-1 max-1 aspect-square rounded-full bg-white/70'></div>

                                <div className='flex items-center gap-1'>
                                    <FiPackage className='text-lg' />
                                    <span className='leading-none text-sm'>1</span>
                                </div> */}
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
                            <span className='text-xl font-semibold uppercase-'>Welcome to the Exclusive Club 💎</span>
                            <GoVerified className='text-xl mt-px text-pink-500' />
                        </div>

                        <div className='flex items-center gap-2 mt-2'>
                            <p className='text-sm text-gray-500 font-medium'>You now have full access to my PRIVATE and EXCLUSIVE videos and pictures - just for you 😉
                                <br />
                                {/* <br /> */}
                                <span className='mt-2'>Enjoy every moment, and remember: what&#39;s shared here stays between us 💋
                                    <br /></span>
                                Check back often - I&#39;ll be adding more soon 🔥
                            </p>
                        </div>
                    </div>
                </section>

                <Post
                    userId='1'
                    postId='1'
                    profilePictureSrc='/images/dev/avatar1.jpg'
                    name='Emily'
                    isLiked={isLiked}
                    isSaved={isSaved}
                    likes={38390}
                    comments={2873}
                    onSave={() => setIsSaved(!isSaved)}
                    onLike={() => setIsLiked(!isLiked)}
                    username='emjayplays'
                    caption='Yes, the back is part of the outfit 😋'
                    posts={[
                        { src: "/videos/dev/3.mp4", thumbnail: '/images/dev/1.jpg', type: 'video' },
                    ]}
                />
                <Post
                    userId='1'
                    postId='1'
                    profilePictureSrc='/images/dev/avatar1.jpg'
                    name='Emily'
                    isLiked={isLiked}
                    isSaved={isSaved}
                    likes={38390}
                    comments={2873}
                    onSave={() => setIsSaved(!isSaved)}
                    onLike={() => setIsLiked(!isLiked)}
                    username='emjayplays'
                    caption='Yes, the back is part of the outfit 😋'
                    posts={[
                        { src: '/images/dev/avatar1.jpg', type: 'photo' },
                        { src: '/images/dev/post1.jpg', type: 'photo' },
                    ]}
                />

                <Post
                    userId='1'
                    postId='1'
                    profilePictureSrc='/images/dev/avatar1.jpg'
                    name='Emily'
                    isLiked={isLiked}
                    isSaved={isSaved}
                    onSave={() => setIsSaved(!isSaved)}
                    onLike={() => setIsLiked(!isLiked)}
                    likes={635272}
                    comments={92793}
                    username='emjayplays'
                    caption="Let' s explore her life, her work and her relatable aspect, making her such a inspiring personality for all of us ❤️"
                    posts={[
                        { src: 'https://www.wewishes.com/uploads/images/202503/image67ceac708209f.webp', type: 'photo' },
                        { src: "/videos/dev/2.mp4", thumbnail: 'https://i.pinimg.com/736x/cf/30/52/cf3052e81e9182759ccc4c3dd39b4e63.jpg', type: 'video' }
                    ]}
                />
            </main>

            <AboutUs />
        </div>
    )
}

export default MemberShipPage;