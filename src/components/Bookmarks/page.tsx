"use client"

import React, { useState } from 'react'
import AboutUs from '../AboutUs/page';
import Post from '../Post';
import { SeconderyNavBar } from '../NavBar/NavBar';

const Bookmarks = () => {
    const [isLiked, setIsLiked] = useState(false);
    const [isSaved, setIsSaved] = useState(true);

    return (
        <div className='w-full flex items-start h-full '>



            <main className='w-full pt-16- md:w-[40vw] md:min-w-[40vw] md:max-w-[40vw] h-full overflow-y-auto custom-scroll'>
                <SeconderyNavBar title='Bookmarks' hasBackButton />

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

export default Bookmarks