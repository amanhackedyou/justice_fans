"use client";

import React from 'react'
import AboutUs from '../AboutUs/page';
import { PremiumPackage } from '../Profile/PremiumPackageSection';
import { SeconderyNavBar } from '../NavBar/NavBar';


const MyMemberships = () => {
    return (
        <div className='w-full flex items-start h-full '>

            <main className='w-full pt-16- md:w-[40vw] md:min-w-[40vw] md:max-w-[40vw] h-full overflow-y-auto custom-scroll flex flex-col bg-gray-100'>
                <SeconderyNavBar title='My Memberships' hasBackButton />
                <div className='flex flex-col gap-4 p-4'>
                    <PremiumPackage isPaid={true} id='1' name='Gold' proofPreviewUrls={["https://www.wewishes.com/uploads/images/202503/image67ceac708209f.webp", "/images/dev/avatar1.jpg", "/images/dev/1.jpg"]} description="Get access to my exclusive photos and content which I don't post everywhere else..." discount='90' originalPrice='1,999' price='99' imageSrc='https://www.wewishes.com/uploads/images/202503/image67ceac708209f.webp' />
                    <PremiumPackage isPaid={true} id='1' name='Gold' proofPreviewUrls={["https://www.wewishes.com/uploads/images/202503/image67ceac708209f.webp", "/images/dev/avatar1.jpg", "/images/dev/1.jpg"]} description="Get access to my exclusive photos and content which I don't post everywhere else..." discount='90' originalPrice='1,999' price='99' imageSrc='/images/dev/1.jpg' />
                </div>
            </main>

            <AboutUs />
        </div>
    )
}

export default MyMemberships