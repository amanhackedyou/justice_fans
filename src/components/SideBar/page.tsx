"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation'
import { BsBookmark } from 'react-icons/bs';
import { GrHomeRounded } from 'react-icons/gr';
import { MdSubscriptions } from 'react-icons/md';

const SideBar = () => {
    const pathname = usePathname();

    const isAllowedToShow = pathname.startsWith("/auth");

    return (
        <section className={`min-w-[30vw] w-[30vw]  px-10  ${!isAllowedToShow ? 'hidden md:flex pt-20' : "hidden"}`}>
            <div className='flex flex-col w-full gap-2'>
                <LinkButton icon={<GrHomeRounded />} text='Home' href='/' isActive={pathname == "/"} />
                <LinkButton icon={<BsBookmark />} text='Collections' href='/bookmark' isActive={pathname == "/bookmark"} />
                <LinkButton icon={<MdSubscriptions />} text='Subscriptions' href='/subscriptions' isActive={pathname == "/subscriptions"} />

                <button className='mx-auto bg-gray-100 text-red-600 w-fit px-8 py-2 rounded-md cursor-pointer hover:bg-gray-200 active:bg-gray-300 transition-all duration-200 font-semibold'>Logout</button>
            </div>
        </section>
    )
}


const LinkButton = ({ icon, text, href, isActive = false }: { icon: React.ReactNode, text: string, href: string, isActive?: boolean }) => {
    return (
        <Link href={href} className={`flex w-full items-center gap-5 p-4 rounded-md ${isActive ? "bg-pink-500/50- bg-gray-200 text-pink-500" : "hover:bg-gray-100"}  transition-all duration-200 ease-in-out`}>
            <span className='text-xl'>{icon}</span>
            <span className='text-xl font-medium- leading-none'>{text}</span>
        </Link>
    )
}

export default SideBar;