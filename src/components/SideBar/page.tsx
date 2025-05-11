// "use client"

// import Link from 'next/link';
// import { usePathname } from 'next/navigation'
// import { useState } from 'react';
// import { BsBookmark } from 'react-icons/bs';
// import { GrHomeRounded } from 'react-icons/gr';
// import { MdCardMembership, MdSubscriptions } from 'react-icons/md';

// const SideBar = () => {
//     const pathname = usePathname();

//     const isAllowedToShow = pathname.startsWith("/auth");

//     const [isLoggedIn, setIsLoggedIn] = useState(false);

//     return (
//         <section className={`min-w-[30vw] w-[30vw]  px-10 pt-20-  ${!isAllowedToShow ? 'hidden md:flex flex-col' : "hidden"}`}>
//             {
//                 isLoggedIn ? <>
//                     <div className='w-full h-20 flex items-center gap-1 text-xs justify-center'>
//                         <span>Logged in with,</span> <span className='underline text-pink-400 hover:text-pink-600 cursor-pointer'>ay12121230@gmail.com</span>
//                     </div>
//                     <div className='flex flex-col w-full gap-2'>
//                         <LinkButton icon={<GrHomeRounded />} text='Home' href='/' isActive={pathname == "/"} />
//                         <LinkButton icon={<BsBookmark />} text='Bookmarks' href='/bookmarks' isActive={pathname == "/bookmarks"} />
//                         <LinkButton icon={<MdCardMembership />} text='My Memberships' href='/my-memberships' isActive={pathname == "/my-memberships"} />
//                         {/* <LinkButton icon={<MdSubscriptions />} text='Subscriptions' href='/subscriptions' isActive={pathname == "/subscriptions"} /> */}

//                         <button className='mx-auto bg-gray-100 text-red-600 w-fit px-8 py-2 rounded-md cursor-pointer hover:bg-gray-200 active:bg-gray-300 transition-all duration-200 font-semibold'>Logout</button>
//                     </div>
//                 </> : <></>
//             }
//         </section>
//     )
// }


// const LinkButton = ({ icon, text, href, isActive = false }: { icon: React.ReactNode, text: string, href: string, isActive?: boolean }) => {
//     return (
//         <Link href={href} className={`flex w-full items-center gap-5 p-4 rounded-md ${isActive ? "bg-pink-500/50- bg-gray-200 text-pink-500" : "hover:bg-gray-100"}  transition-all duration-200 ease-in-out`}>
//             <span className='text-xl'>{icon}</span>
//             <span className='text-xl font-medium- leading-none'>{text}</span>
//         </Link>
//     )
// }

// export default SideBar;

"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { BsBookmark } from 'react-icons/bs';
import { GrHomeRounded } from 'react-icons/gr';
import { MdCardMembership } from 'react-icons/md';

const SideBar = () => {
    const pathname = usePathname();

    const isAllowedToShow = pathname.startsWith("/auth");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <section className={`min-w-[30vw] w-[30vw] px-10 pt-20 ${!isAllowedToShow ? 'hidden md:flex flex-col' : 'hidden'}`}>
            {isLoggedIn ? (
                <>
                    <div className='w-full h-20 flex items-center gap-1 text-xs justify-center'>
                        <span>Logged in with,</span>
                        <span className='underline text-pink-400 hover:text-pink-600 cursor-pointer'>
                            ay12121230@gmail.com
                        </span>
                    </div>
                    <div className='flex flex-col w-full gap-2'>
                        <LinkButton icon={<GrHomeRounded />} text='Home' href='/' isActive={pathname == "/"} />
                        <LinkButton icon={<BsBookmark />} text='Bookmarks' href='/bookmarks' isActive={pathname == "/bookmarks"} />
                        <LinkButton icon={<MdCardMembership />} text='My Memberships' href='/my-memberships' isActive={pathname == "/my-memberships"} />
                        <button className='mx-auto bg-gray-100 text-red-600 w-fit px-8 py-2 rounded-md cursor-pointer hover:bg-gray-200 active:bg-gray-300 transition-all duration-200 font-semibold'>
                            Logout
                        </button>
                    </div>
                </>
            ) : (
                <>
                    <div className='w-full h-20 flex items-center justify-center text-sm text-gray-500'>
                        You&#39;re not logged in.
                    </div>
                    <div className='flex flex-col w-full gap-2'>
                        <Link href="/auth/login">
                            <button className='w-full bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 transition cursor-pointer'>
                                Login
                            </button>
                        </Link>
                        <Link href="/auth/signup">
                            <button className='w-full bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition cursor-pointer'>
                                Sign Up
                            </button>
                        </Link>
                    </div>
                </>
            )}
        </section>
    );
};

const LinkButton = ({
    icon,
    text,
    href,
    isActive = false,
}: {
    icon: React.ReactNode;
    text: string;
    href: string;
    isActive?: boolean;
}) => {
    return (
        <Link
            href={href}
            className={`flex w-full items-center gap-5 p-4 rounded-md ${isActive ? "bg-pink-100 text-pink-500" : "hover:bg-gray-100"
                } transition-all duration-200 ease-in-out`}
        >
            <span className='text-xl'>{icon}</span>
            <span className='text-xl font-medium'>{text}</span>
        </Link>
    );
};

export default SideBar;
