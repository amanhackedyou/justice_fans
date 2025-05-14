"use client"

import { ProfPreviewer } from '@/components/Profile/PremiumPackageSection';
// import { PremiumPackage } from '@/components/Profile/PremiumPackageSection';
import React, { useEffect, useRef, useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Slide } from 'react-slideshow-image';
import CreateOrUpdateMembership from './create_membership.window';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const MembershipsTab = () => {

    return (
        <section className='flex flex-col gap-3 w-full'>
            <PremiumPackage id='1' profileId='1' name='Gold' proofPreviewUrls={["https://www.wewishes.com/uploads/images/202503/image67ceac708209f.webp", "/images/dev/avatar1.jpg", "/images/dev/1.jpg"]} description="Get access to my exclusive photos and content which I don't post everywhere else..." discount='90' originalPrice='1,999' price='99' imageSrc='https://www.wewishes.com/uploads/images/202503/image67ceac708209f.webp' />
            <PremiumPackage id='1' profileId='1' name='Gold' proofPreviewUrls={["https://www.wewishes.com/uploads/images/202503/image67ceac708209f.webp", "/images/dev/avatar1.jpg", "/images/dev/1.jpg"]} description="Get access to my exclusive photos and content which I don't post everywhere else..." discount='90' originalPrice='1,999' price='99' imageSrc='https://www.wewishes.com/uploads/images/202503/image67ceac708209f.webp' />
            <PremiumPackage id='1' profileId='1' name='Gold' proofPreviewUrls={["https://www.wewishes.com/uploads/images/202503/image67ceac708209f.webp", "/images/dev/avatar1.jpg", "/images/dev/1.jpg"]} description="Get access to my exclusive photos and content which I don't post everywhere else..." discount='90' originalPrice='1,999' price='99' imageSrc='https://www.wewishes.com/uploads/images/202503/image67ceac708209f.webp' />
            <PremiumPackage id='1' profileId='1' name='Gold' proofPreviewUrls={["https://www.wewishes.com/uploads/images/202503/image67ceac708209f.webp", "/images/dev/avatar1.jpg", "/images/dev/1.jpg"]} description="Get access to my exclusive photos and content which I don't post everywhere else..." discount='90' originalPrice='1,999' price='99' imageSrc='https://www.wewishes.com/uploads/images/202503/image67ceac708209f.webp' />
        </section>
    )
}


interface PremiumPackageProps {
    id: string,
    profileId: string,
    imageSrc: string;
    name: string;
    description: string;
    price: string;
    originalPrice: string;
    discount: string;
    proofPreviewUrls: string[];
}

const PremiumPackage = (props: PremiumPackageProps) => {
    const [currentPostIndex, setCurrentPostIndex] = useState(0);
    const [isDetailsShowing, setIsDetailsShowing] = useState(false);
    const [isUpdateMembershipOpened, setIsUpdateMembershipOpened] = useState(false);

    const nextButtonRef = useRef(null);
    const prevButtonRef = useRef(null);

    const addButtonListener = (e: KeyboardEvent) => {
        if (e.key === "ArrowRight") {
            setCurrentPostIndex((prev) => {
                if (prev + 1 >= props.proofPreviewUrls.length) return prev;
                nextButtonRef.current.click();
                return prev + 1;
            })
        }
        if (e.key === "ArrowLeft") {
            setCurrentPostIndex((prev) => {
                if (prev <= 0) return prev;
                prevButtonRef.current.click();
                return prev - 1;
            })
        }
    }

    useEffect(() => {
        if (props.proofPreviewUrls.length > 1) {
            if (isDetailsShowing) {
                document.body.addEventListener('keydown', addButtonListener);
            } else {
                document.body.removeEventListener('keydown', addButtonListener);
            }
        }
    }, [isDetailsShowing, addButtonListener, props.proofPreviewUrls.length]);


    const router = useRouter();

    return (
        <>
            {isUpdateMembershipOpened && <CreateOrUpdateMembership membershipData={{
                id: "823728378273",
                actualPrice: '200',
                originalPrice: '500',
                comingSoon: false,
                coverImage: 'https://lh3.googleusercontent.com/rL6TKaC9rRwjeHTc8zQ4Cqzj5pjMGgN6fR964Qp6WZ10jpSnp39kkfG-EDLmcYuWyRdvh7sk3kioc-STvXNPZ98d-WwEWNRM=s200-c',
                description: 'Get access to my PRIVATE and EXCLUSIVE Videos and Pictures here 😉',
                name: 'Aanya Advani',
                proofFiles: ["/images/dev/1.jpg", "/images/dev/2.jpeg"]

            }} onClose={() => setIsUpdateMembershipOpened(false)} />}

            {isDetailsShowing && (
                <section onClick={e => {
                    if (e.target === e.currentTarget) {
                        setIsDetailsShowing(false);
                    }
                }} className="fixed w-screen top-0 left-0 h-screen inset-0- bg-white/20 flex items-center justify-center z-20 backdrop-blur">
                    <div className="bg-white p-4 rounded-lg shadow-lg max-h-[90%] max-w-[90%] md:max-w-1/3">
                        {/* <h2 className="text-lg font-bold">{props.name}</h2> */}
                        <h2 className="text-lg md:text-xl font-semibold uppercase text-gray-800">{`${props.name} (${props.discount}% OFF)`}</h2>

                        <div className='w-full max-w-full aspect-square bg-red-50 my-2 relative'>
                            {props.proofPreviewUrls.length > 1 && <span className='absolute top-2 right-2 bg-white/40 backdrop-blur z-10 w-12 py-1 flex justify-center items-center rounded-full text-sm font-medium'>{`${currentPostIndex + 1}/${props.proofPreviewUrls.length}`}</span>}
                            <Slide
                                easing="ease"
                                transitionDuration={200}
                                canSwipe
                                arrows={true}
                                nextArrow={
                                    <div ref={nextButtonRef} className='p-4'>
                                        <button className='w-8 min-w-8 max-w-8 flex items-center justify-center aspect-square rounded-full bg-white/20 backdrop-blur-sm cursor-pointer hover:bg-white/50'>
                                            <IoIosArrowForward />
                                        </button>
                                    </div>
                                }

                                prevArrow={
                                    <div ref={prevButtonRef} className='p-4'>
                                        <button className='w-8 min-w-8 max-w-8 flex items-center justify-center aspect-square rounded-full bg-white/20 backdrop-blur-sm cursor-pointer hover:bg-white/50'>
                                            <IoIosArrowBack />
                                        </button>
                                    </div>
                                }
                                onChange={(from, to) => {
                                    setCurrentPostIndex(to);
                                }}
                            >
                                {
                                    props.proofPreviewUrls.map((src, i) => {
                                        return <ProfPreviewer key={i} src={src} />
                                    })
                                }
                            </Slide>
                        </div>

                        <p className='text-sm text-gray-600'>{props.description}</p>
                        <button
                            className="mt-4 text-pink-500 hover:underline cursor-pointer"
                            onClick={() => setIsDetailsShowing(false)}
                        >
                            Close
                        </button>
                    </div>
                </section>
            )}
            <div onClick={e => {
                //@ts-ignore
                if (e.target.tagName !== "BUTTON") {
                    router.push(`/dashboard/profiles/${props.profileId}/membership/${props.id}`)
                }
            }} className="p-6 bg-whiten hover:bg-gray-100 rounded-2xl shadow-lg w-full flex flex-col md:flex-row gap-4 border border-gray-200">
                {/* Image + Discount Badge */}
                <div className="relative w-full md:w-1/2 h-60 overflow-hidden rounded-xl">
                    <img
                        className="w-full h-full object-cover object-center"
                        src={props.imageSrc}
                        alt={props.description}
                    />
                    <div className="absolute top-2 left-2 bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow">
                        {props.discount}% OFF
                    </div>
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2 flex flex-col justify-between gap-4">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-lg md:text-xl font-bold uppercase text-gray-800">{`${props.name} (-${props.discount}%)`}</h2>
                        <p className="text-sm text-gray-600">
                            {props.description}
                        </p>
                    </div>

                    {/* Price Section */}
                    <div className="flex items-center gap-4">
                        <span className="text-xl font-bold text-pink-600">₹{props.price}</span>
                        <span className="line-through text-sm text-gray-400">₹{props.originalPrice}</span>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                        {/* <button onClick={e => setIsDetailsShowing(true)} className="text-xs font-semibold text-pink-600 hover:underline cursor-pointer">View details</button> */}
                        <button onClick={e => setIsUpdateMembershipOpened(true)} className="px-4 py-2 bg-pink-500 text-white text-xs rounded-lg cursor-pointer shadow hover:bg-pink-600 active:bg-pink-700 transition-all">
                            Edit membership
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MembershipsTab;