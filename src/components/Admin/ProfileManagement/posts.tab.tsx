import React from 'react';
import PostCard from './PostCard'; // Adjust the path
import { dummyPosts } from './PostCard'; // Adjust the path

const PostsTab = () => {
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
        <section className="flex flex-col gap-3 w-full">
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
    );
};

export default PostsTab;
