"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { createContext, ReactNode, useContext, useState } from "react";
import { BsBookmark } from "react-icons/bs";
import { GrHomeRounded } from "react-icons/gr";
import { MdCardMembership } from "react-icons/md";

interface SideBarContextType {
    isMenuOpened: boolean,
    setIsMenuOpened: (newValue: boolean) => void;
}

const SideBarContext = createContext<SideBarContextType | null>(null);

export const SideBarProvider = ({ children }: { children: ReactNode }) => {
    const [isMenuOpened, setIsMenuOpened] = useState(false);
    const pathname = usePathname();

    const isAllowedToShow = pathname.startsWith("/auth");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

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
                onClick={e => setIsMenuOpened(false)}
                className={`flex w-full items-center gap-5 p-4 rounded-md ${isActive ? "bg-pink-100 text-pink-500" : "hover:bg-gray-100"
                    } transition-all duration-200 ease-in-out`}
            >
                <span className='text-xl'>{icon}</span>
                <span className='text-xl font-medium'>{text}</span>
            </Link>
        );
    };

    return <SideBarContext.Provider value={{ isMenuOpened, setIsMenuOpened }}>
        <section className={`${isMenuOpened ? "translate-x-0" : "-translate-x-[100%]"} md:translate-0 transition-all duration-300 ease-in-out fixed top-0 left-0 z-[19] w-full h-full md:static md:min-w-[30vw] md:w-[30vw] px-10 pt-16 bg-white ${!isAllowedToShow ? 'hidden- flex flex-col' : 'hidden'}`}>
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
                        You&#39;`re not logged in.
                    </div>
                    <div className='flex flex-col w-full gap-2'>
                        <LinkButton icon={<GrHomeRounded />} text='Home' href='/' isActive={pathname == "/"} />

                        <Link
                            onClick={e => setIsMenuOpened(false)}
                            href="/auth/login">
                            <button className='w-full bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 transition cursor-pointer'>
                                Login
                            </button>
                        </Link>
                        <Link
                            onClick={e => setIsMenuOpened(false)}
                            href="/auth/signup">
                            <button className='w-full bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition cursor-pointer'>
                                Sign Up
                            </button>
                        </Link>
                    </div>
                </>
            )}
        </section>
        {children}
    </SideBarContext.Provider>
}





export const useSideBarContext = () => useContext(SideBarContext);