"use client"

import React, { useState } from 'react';
import PostCard from '../ProfileManagement/PostCard'; // Adjust the path
import { dummyPosts } from '../ProfileManagement/PostCard'; // Adjust the path
import AddNewPostWindow from '../ProfileManagement/add_new_post.component';

const MembershipPage = ({ profileId, membershipId }: { profileId: string, membershipId: string }) => {
    const [isAddNewPostOpened, setIsAddNewPostOpened] = useState(false);

    const handleEdit = (postId: string) => {
        console.log('Edit:', postId);
    };

    const handleDelete = (postId: string) => {
        console.log('Delete:', postId);
    };

    const handleToggleVisibility = (postId: string, hidden: boolean) => {
        console.log(`${hidden ? 'Hiding' : 'Unhiding'} post:`, postId);
    };

    return (
        <>
            {isAddNewPostOpened && <AddNewPostWindow membershipId={membershipId} onClose={() => setIsAddNewPostOpened(false)} />}


            <section className="flex flex-col gap-3 w-full md:w-[60%]">
                <h1 className='text-xl font-medium text-gray-600'>Membership posts</h1>
                <div className='flex items-center gap-4'>
                    <button
                        onClick={e => setIsAddNewPostOpened(true)}
                        className="px-4 py-2 rounded-lg cursor-pointer bg-pink-500 text-white hover:bg-pink-600 transition font-medium text-sm"
                    >
                        + New Post
                    </button>
                </div>
                {dummyPosts.map(post => (
                    <PostCard
                        key={post.id}
                        post={post}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                        onToggleVisibility={handleToggleVisibility}
                    />
                ))}
            </section>
        </>
    );
};

export default MembershipPage;
