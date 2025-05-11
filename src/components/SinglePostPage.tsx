"use client"

import { useState } from "react";
import AboutUs from "./AboutUs/page";
import NavBar from "./NavBar/NavBar";
import Post from "./Post";
import PremiumPackageView from "./Profile/PremiumPackageSection";

const SinglePostPage = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    const [isLiked, setIsLiked] = useState(false);
    const [isSaved, setIsSaved] = useState(false);

    return (
        <div className='w-full flex items-start h-full pt-16'>
            <NavBar isShowing={scrollPosition < 10} />



            <main onScroll={e => {
                setScrollPosition(e.currentTarget.scrollTop);
            }} className='w-full  md:w-[40vw] md:min-w-[40vw] md:max-w-[40vw] h-full overflow-y-auto custom-scroll'>
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
            </main>

            {/* <AboutUs /> */}
            <PremiumPackageView />
        </div>
    )
}

export default SinglePostPage