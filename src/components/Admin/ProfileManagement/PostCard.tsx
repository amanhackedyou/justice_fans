import React from 'react';
import { FiEdit2, FiTrash2, FiEye, FiEyeOff, FiHeart, FiMessageCircle, FiImage, FiVideo, FiCopy, FiSave } from 'react-icons/fi';



export type MediaItem = {
    type: 'image' | 'video';
    url: string;
};

export type Post = {
    id: string;
    caption: string;
    media: MediaItem[];
    likes: number;
    comments: number;
    linkCopies: number;
    saves: number; // Added saves field
    isHidden?: boolean;
};

type PostCardProps = {
    post: Post;
    onEdit?: (id: string) => void;
    onDelete?: (id: string) => void;
    onToggleVisibility?: (id: string, newValue: boolean) => void;
    onSavePost?: (id: string) => void; // Callback for saving a post
};

const PostCard: React.FC<PostCardProps> = ({
    post,
    onEdit,
    onDelete,
    onToggleVisibility,
    onSavePost,
}) => {
    const firstMedia = post.media[0];

    const hasImages = post.media.some((m) => m.type === 'image');
    const hasVideos = post.media.some((m) => m.type === 'video');

    const handleSaveClick = () => {
        if (onSavePost) {
            onSavePost(post.id); // Trigger save functionality
        }
    };

    return (
        <div className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition w-full">
            {/* Media Thumbnail */}
            <div className="min-w-[90px] h-[90px] rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                {firstMedia ? (
                    firstMedia.type === 'image' ? (
                        <img
                            src={firstMedia.url}
                            alt="Post media"
                            className="object-cover w-full h-full"
                        />
                    ) : (
                        <video
                            src={firstMedia.url}
                            className="object-cover w-full h-full"
                            muted
                            preload="metadata"
                        />
                    )
                ) : (
                    <FiImage size={24} className="text-gray-400" />
                )}
            </div>

            {/* Post Details */}
            <div className="flex-1 flex flex-col gap-2 overflow-hidden">
                <div className="flex justify-between items-start gap-4">
                    {/* Caption */}
                    <p className="text-gray-800 font-medium line-clamp-2 flex-1">
                        {post.caption || (
                            <span className="italic text-gray-400">No caption</span>
                        )}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex gap-3 self-start ml-auto shrink-0">
                        <button
                            onClick={() => onEdit?.(post.id)}
                            className="text-gray-500 cursor-pointer hover:text-blue-600"
                            title="Edit"
                        >
                            <FiEdit2 size={18} />
                        </button>
                        <button
                            onClick={() => onDelete?.(post.id)}
                            className="text-gray-500 cursor-pointer hover:text-red-600"
                            title="Delete"
                        >
                            <FiTrash2 size={18} />
                        </button>
                        <button
                            onClick={() =>
                                onToggleVisibility?.(post.id, !post.isHidden)
                            }
                            className="text-gray-500 cursor-pointer hover:text-purple-600"
                            title={post.isHidden ? 'Unhide' : 'Hide'}
                        >
                            {post.isHidden ? <FiEye size={18} /> : <FiEyeOff size={18} />}
                        </button>
                    </div>
                </div>

                {/* Stats */}
                <div className="flex flex-wrap gap-4 text-sm text-gray-500 mt-1">
                    <div className="flex items-center gap-1">
                        <FiHeart className="text-pink-500" />
                        {post.likes}
                    </div>
                    <div className="flex items-center gap-1">
                        <FiMessageCircle className="text-blue-500" />
                        {post.comments}
                    </div>
                    <div className="flex items-center gap-1">
                        {hasImages && hasVideos ? (
                            <>
                                <FiImage />
                                <FiVideo className="ml-1" />
                            </>
                        ) : hasVideos ? (
                            <FiVideo />
                        ) : (
                            <FiImage />
                        )}
                        {post.media.length}
                    </div>
                    <div className="flex items-center gap-1">
                        <FiCopy className="text-green-600" />
                        {post.linkCopies}
                    </div>

                    {/* Save Count */}
                    <div className="flex items-center gap-1">
                        <button
                            onClick={handleSaveClick}
                            className="text-gray-500 cursor-pointer hover:text-green-600"
                            title="Save Post"
                        >
                            <FiSave size={18} />
                        </button>
                        {post.saves}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostCard;


export const dummyPosts: Post[] = [
    {
        id: '1',
        caption: 'Enjoying the summer vibes! 🌞🌊',
        media: [
            { type: 'image', url: '/images/dev/1.jpg' },
            { type: 'video', url: '/videos/dev/1.mp4' },
        ],
        likes: 120,
        comments: 30,
        linkCopies: 14,
        saves: 10,  // Added saves field
        isHidden: false,
    },
    {
        id: '2',
        caption: 'My dog is a model 🐶📸',
        media: [
            { type: 'image', url: '/images/dev/2.jpeg' },
        ],
        likes: 230,
        comments: 50,
        linkCopies: 42,
        saves: 15,  // Added saves field
        isHidden: true,
    },
    {
        id: '3',
        caption: '',
        media: [],
        likes: 5,
        comments: 0,
        linkCopies: 1,
        saves: 0,  // Added saves field
        isHidden: false,
    },
];
