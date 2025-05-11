'use client';

import { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

type CommentProps = {
    id: string;
    content: string;
    initialLikes: number;
    isLikedByUser: boolean;
};

const Comment = ({
    id,
    content,
    initialLikes,
    isLikedByUser,
}: CommentProps) => {
    const [likes, setLikes] = useState(initialLikes);
    const [liked, setLiked] = useState(isLikedByUser);

    const toggleLike = () => {
        setLiked(prev => !prev);
        setLikes(prev => liked ? prev - 1 : prev + 1);
        // TODO: API call to update like status
    };

    return (
        <div className="bg-gradient-to-tr from-white to-gray-50 border border-gray-200 rounded-2xl px-5 py-4 shadow-lg hover:shadow-xl transition-all duration-200 ease-in-out group">
            <p className="text-gray-800  text-[0.95rem] leading-relaxed tracking-wide mb-4">
                {content}
            </p>

            <div className="flex justify-end">
                <button
                    onClick={toggleLike}
                    className="flex items-center outline-none cursor-pointer gap-2 px-3 py-1 rounded-full text-sm font-medium text-pink-600 dark:text-pink-400 hover:bg-pink-100/60 dark:hover:bg-pink-400/10 transition-all duration-200"
                >
                    {liked ? <FaHeart className="text-pink-500 animate-pulse" /> : <FaRegHeart />}
                    <span className="text-sm">{likes}</span>
                </button>
            </div>
        </div>
    );
};

export default Comment;
