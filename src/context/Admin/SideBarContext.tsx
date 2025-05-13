"use client"

import NavBar from "@/components/Admin/NavBar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { createContext, ReactNode, useContext, useState } from "react";
import { GrHomeRounded } from "react-icons/gr";
import { MdCardMembership } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaUserCog } from "react-icons/fa";

interface SideBarContextType {
    isMenuOpened: boolean,
    setIsMenuOpened: (newValue: boolean) => void;
}

const SideBarContext = createContext<SideBarContextType | null>(null);

export const SideBarProvider = ({ children }: { children: ReactNode }) => {
    const [isMenuOpened, setIsMenuOpened] = useState(false);
    const pathname = usePathname();

    const isAllowedToShow = !pathname.startsWith("/dashboard/auth");
    const [isLoggedIn, setIsLoggedIn] = useState(true);

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
        <>
            <section className={`${isMenuOpened ? "translate-x-0" : "-translate-x-[100%]"} md:translate-0 transition-all duration-300 ease-in-out fixed top-0 left-0 z-[19] w-full h-full md:static md:min-w-[30vw] md:w-[30vw] px-10 pt-16 bg-white ${isAllowedToShow ? 'hidden- flex flex-col' : 'hidden'}`}>
                <div className='w-full h-20 flex items-center gap-1 text-xs justify-center'>
                    <span>Logged in as,</span>
                    <span className='underline text-pink-400 hover:text-pink-600 cursor-pointer'>
                        ADMIN
                    </span>
                </div>
                <div className='flex flex-col w-full gap-2'>
                    <LinkButton icon={<GrHomeRounded />} text='Home' href='/dashboard' isActive={pathname == "/dashboard"} />
                    <LinkButton icon={<CgProfile className="text-2xl" />} text='Profiles' href='/dashboard/profiles' isActive={pathname == "/dashboard/profiles"} />
                    <LinkButton icon={<FaUserCog />} text='Whitelists' href='/dashboard/whitelist-users' isActive={pathname == "/dashboard/whitelist-users"} />
                    <button className='mx-auto bg-gray-100 text-red-600 w-fit px-8 py-2 rounded-md cursor-pointer hover:bg-gray-200 active:bg-gray-300 transition-all duration-200 font-semibold'>
                        Logout
                    </button>
                </div>
            </section>
            {children}
        </>

    </SideBarContext.Provider>
}





export const useSideBarContext = () => useContext(SideBarContext);