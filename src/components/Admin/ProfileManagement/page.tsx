"use client"

import React, { useState } from 'react'
import PostsTab from './posts.tab';
import MembershipsTab from './memberships.tab';
import FixedWindow from '../ui/FixedWindow';
import AddNewPostWindow from './add_new_post.component';

const ProfileManagement = () => {
    const [tab, setTab] = useState("Posts");
    const [isAddNewPostOpened, setIsAddNewPostOpened] = useState(true);

    return (
        <>
            {isAddNewPostOpened && <AddNewPostWindow onClose={() => setIsAddNewPostOpened(false)} />}
            <div className="w-full h-full flex flex-col gap-2 md:w-[60%]">
                <h1 className="text-xl font-medium text-gray-600">Profile Management</h1>

                {/* Profile Header */}
                <div className="flex flex-col items-center gap-1 py-4 border-b border-gray-200">
                    <div className="w-32 min-w-32 rounded-full border border-pink-500 aspect-square">
                        <img
                            className="w-full h-full rounded-full object-center object-cover"
                            src="https://lh3.googleusercontent.com/rL6TKaC9rRwjeHTc8zQ4Cqzj5pjMGgN6fR964Qp6WZ10jpSnp39kkfG-EDLmcYuWyRdvh7sk3kioc-STvXNPZ98d-WwEWNRM=s200-c"
                            alt="Profile DP"
                        />
                    </div>
                    <h2 className="text-xl font-medium leading-none">Aanya Advani</h2>
                    <span className="text-sm font-medium text-gray-500 leading-none">@aanya_advani</span>
                </div>

                {/* Tabs */}
                <TabView currentTab={tab} setTab={setTab} />

                {/* New Post Button */}
                {tab === 'Posts' && (
                    <div className="flex justify-end">
                        <button
                            onClick={e => setIsAddNewPostOpened(true)}
                            className="px-4 py-2 rounded-lg cursor-pointer bg-pink-500 text-white hover:bg-pink-600 transition font-medium text-sm"
                        >
                            + New Post
                        </button>
                    </div>
                )}

                {/* Content */}
                <div className="w-full min-h-[80vh]">
                    {tab === 'Posts' ? <PostsTab /> : <MembershipsTab />}
                </div>
            </div>
        </>
    );
};


const TabView = ({ currentTab, setTab }: { currentTab: string, setTab: Function }) => {
    const TabItem = ({ tab }: { tab: string }) => {
        const isActive = tab === currentTab;
        return <button onClick={e => setTab(tab)} className={`leading-none cursor-pointer text-base px-4 py-2  rounded-xl shadow ${isActive ? "bg-pink-500 text-white font-medium" : "bg-gray-200 text-gray-600 hover:bg-gray-300"}`}>{tab}</button>
    }
    return <section className='w-full flex gap-4'>
        <TabItem tab="Posts" />
        <TabItem tab="Memberships" />
    </section>
}

export default ProfileManagement