"use client"

import React, { useState } from 'react'
import { IoMdArrowBack } from 'react-icons/io'
import { IoCloseSharp } from 'react-icons/io5'
import Comment from './Comment'
import { BiSolidSend } from 'react-icons/bi'

interface CommentSectionProps {
    postId: string,
    onClose: () => void
}

const CommentSection = (props: CommentSectionProps) => {
    const [comment, setComment] = useState("");

    return (
        <section className='fixed w-full h-screen bg-white/20 backdrop-blur-sm flex items-center justify-center z-30 left-0 top-0'>
            <div className='w-full h-full relative flex flex-col bg-white- bg-gray-100 md:w-1/3 md:h-[90%] md:shadow md:rounded-2xl p-4- overflow-hidden'>
                <div className='flex items-center bg-white gap-4 justify-start p-4 shadow'>
                    <button onClick={e => props.onClose()} className='text-2xl cursor-pointer hover:text-gray-500 outline-none transition-all'>
                        <IoMdArrowBack />
                    </button>

                    <span className='text-lg leading-none font-medium'>Comments</span>
                </div>

                <div className='flex flex-col h-full justify-between-'>
                    <div className='flex flex-col w-full h-full- gap-4 p-4 overflow-y-auto custom-scroll pb-32'>
                        <Comment
                            id="cmt-123"
                            content="This is honestly one of the best things I’ve seen today. Thank you!"
                            initialLikes={27}
                            isLikedByUser={false}
                        />

                        <Comment
                            id="cmt-123"
                            content="This is honestly one of the best things I’ve seen today. Thank you!"
                            initialLikes={27}
                            isLikedByUser={false}
                        />

                        <Comment
                            id="cmt-123"
                            content="This is honestly one of the best things I’ve seen today. Thank you!"
                            initialLikes={27}
                            isLikedByUser={false}
                        />

                        <Comment
                            id="cmt-123"
                            content="This is honestly one of the best things I’ve seen today. Thank you!"
                            initialLikes={27}
                            isLikedByUser={false}
                        />

                        <Comment
                            id="cmt-123"
                            content="This is honestly one of the best things I’ve seen today. Thank you!"
                            initialLikes={27}
                            isLikedByUser={false}
                        />

                        <Comment
                            id="cmt-123"
                            content="This is honestly one of the best things I’ve seen today. Thank you!"
                            initialLikes={27}
                            isLikedByUser={false}
                        />

                        <Comment
                            id="cmt-123"
                            content="This is honestly one of the best things I’ve seen today. Thank you!"
                            initialLikes={27}
                            isLikedByUser={false}
                        />

                        <Comment
                            id="cmt-123"
                            content="This is honestly one of the best things I’ve seen today. Thank you!"
                            initialLikes={27}
                            isLikedByUser={false}
                        />

                    </div>

                    <div className='w-full min-h-12- absolute bottom-0 left-0 bg-white px-4  shadow flex gap-2 items-center'>
                        <input value={comment} onChange={e => setComment(e.target.value)} className='outline-none w-full text-sm border- py-2- py-3 md:py-4' placeholder='Write your comment...' type="text" />
                        <button className={`text-3xl  ${comment.length > 0 ? "text-pink-500 active:text-pink-600 cursor-pointer" : "text-pink-300 cursor-not-allowed"}`}>
                            <BiSolidSend />
                        </button>
                    </div>
                </div>



            </div>
        </section>
    )
}

export default CommentSection