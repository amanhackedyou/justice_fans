"use client"

import { useFullScreenMediaContext } from '@/context/FullScreenMediaContext';
import { formatNumberHumanReadable } from '@/utils/utils';
import Image from 'next/image';
import React, { useState } from 'react'
import { BiComment } from 'react-icons/bi';
import { BsBookmark, BsBookmarkCheckFill, BsThreeDots } from 'react-icons/bs';
import { FaPlay } from 'react-icons/fa';
import { FiHeart } from 'react-icons/fi';
import { GoHeartFill, GoVerified } from 'react-icons/go';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

interface PostData {
    src: string,
    thumbnail?: string,
    type: "photo" | "video",
}

const Post = ({ userId, postId, likes, comments, isLiked = false, isSaved = false, profilePictureSrc, name, username, caption = "", posts, onLike, onSave }: { userId: string, postId: string, isLiked?: boolean, profilePictureSrc: string, name: string, username: string, caption?: string, posts: PostData[], isSaved?: boolean, onSave: Function, onLike: Function, likes: number, comments: number }) => {
    const [currentPostIndex, setCurrentPostIndex] = useState(0);

    return (
        <div className='flex flex-col border-b border-gray-200 w-full'>
            <div className='p-4 flex flex-col gap-2'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center space-x-3 w-full'>
                        <Image width={60} height={60} className='w-10 max-10 min-10 aspect-square rounded-full object-center object-cover' src={profilePictureSrc} alt={`Profile picture of @${username}`} />
                        <div className='flex flex-col w-full'>
                            <div className='flex items-center justify-between'>
                                <div className='flex gap-1'>
                                    <span className='font-semibold text-lg leading-none'>{name}</span>
                                    <GoVerified className='text-base mt-px text-pink-500' />
                                </div>
                                <button className='text-gray-400 text-2xl active:text-gray-600 hover:text-gray-600'>
                                    <BsThreeDots />
                                </button>
                            </div>
                            <span className='text-gray-500 text-sm leading-none'>@{username}</span>
                        </div>
                    </div>

                </div>

                <p className='text-sm'>
                    {caption}
                </p>
            </div>


            <div className='flex flex-col w-full relative max-w-full'>
                {posts.length > 1 && <span className='absolute top-2 right-2 bg-white/40 backdrop-blur z-10 w-12 py-1 flex justify-center items-center rounded-full text-sm font-medium'>{`${currentPostIndex + 1}/${posts.length}`}</span>}
                <Slide
                    transitionDuration={200}
                    canSwipe
                    // arrows={false}
                    nextArrow={
                        <div className='p-4'>
                            <button className='w-8 min-w-8 max-w-8 flex items-center justify-center aspect-square rounded-full bg-white/20 backdrop-blur-sm cursor-pointer hover:bg-white/50'>
                                <IoIosArrowForward />
                            </button>
                        </div>
                    }

                    prevArrow={
                        <div className='p-4'>
                            <button className='w-8 min-w-8 max-w-8 flex items-center justify-center aspect-square rounded-full bg-white/20 backdrop-blur-sm cursor-pointer hover:bg-white/50'>
                                <IoIosArrowBack />
                            </button>
                        </div>
                    }
                    onChange={(from, to) => {
                        setCurrentPostIndex(to);
                    }}
                >
                    {
                        posts.map((post, i) => {
                            return <PostView key={i} src={post.src} postType={post.type} thumbnail={post.thumbnail} alt={`${name}'s ${post.type} post.`} />
                        })
                    }
                </Slide>
            </div>


            <div className='flex items-start p-4 justify-between'>
                <div className='flex items-center gap-5'>
                    <InteractionButton onClick={onLike} icon={isLiked ? <GoHeartFill className='text-pink-500' /> : <FiHeart />} text={formatNumberHumanReadable(likes)} />
                    <InteractionButton icon={<BiComment />} text={formatNumberHumanReadable(comments)} />
                </div>

                <InteractionButton icon={isSaved ? <BsBookmarkCheckFill className='text-xl' /> : <BsBookmark className='text-xl' />} onClick={onSave} />

            </div>

        </div>
    )
}


const PostView = ({ src, alt = "Post", postType, thumbnail = "" }: { src: string, alt?: string, postType: "photo" | "video", thumbnail?: string }) => {
    const useMediaContext = useFullScreenMediaContext();

    return <div onClick={e => {
        useMediaContext?.showMedia(src, postType);
    }} className='w-full min-w-full aspect-square flex items-center- justify-center bg-black relative'>
        <img className='h-full w-full- select-none cursor-pointer' src={postType === "photo" ? src : thumbnail} alt={alt} />

        {postType === "video" && <div className='absolute inset-0 bg-black/50 flex items-center justify-center'>
            <button className='text-white text-6xl cursor-pointer'>
                <FaPlay />
            </button>
        </div>
        }
    </div>
}

const InteractionButton = ({ icon, text, onClick = () => { } }: { icon: React.ReactNode, text?: string, onClick?: Function }) => {
    return (
        <button onClick={(e) => onClick()} className='flex items-center outline-none gap-2 text-gray-500 hover:text-gray-600 active:text-gray-600'>
            <span className='text-2xl'>{icon}</span>
            {text && <span className='text-sm'>{text}</span>}
        </button>
    )
}

export default Post;