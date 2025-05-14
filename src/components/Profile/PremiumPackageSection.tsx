import { useFullScreenMediaContext } from '@/context/FullScreenMediaContext';
import React, { useEffect, useRef, useState } from 'react'
import { FaPlay } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Slide } from 'react-slideshow-image';

const PremiumPackageView = ({ isMobileMode = false }) => {

  return (
    <section className={`${isMobileMode ? "flex" : "hidden md:flex"} w-full p-4 bg-gray-100  pt-16- overflow-y-auto custom-scroll h-full`}>
      <div className='flex flex-col items-center w-full'>
        <img className='w-full max-h-[70vh] rounded-xl object-center object-cover' src="/images/dev/avatar1.jpg" alt="" />

        <h1 className='text-2xl font-medium text-center mt-4'>
          {"Hii, I'm Aanya Advani!"}
        </h1>

        <p className='text-center text-sm mt-1 text-gray-600'>Get access to my PRIVATE and EXCLUSIVE Videos and Pictures here 😉</p>

        {/* <div className='w-full h-px border-b border-gray-200 mt-2'></div> */}

        <div className='flex flex-col gap-2 mt-6 w-full items-center '>
          <span className='text-lg'>Why should I believe?</span>
          <p className='text-sm text-gray-500 text-center'>Feel free to scroll down to explore my exclusive packages. When you click the View Details button, you&#39;ll be taken to a dedicated page <b>showcasing proof</b> and exclusive content available only to members. </p>
        </div>


        <div className='flex flex-col gap-2 mt-2 w-full items-center py-4'>
          <span className='text-lg'>Memberships</span>
          <PremiumPackage id='1' name='Gold' proofPreviewUrls={["https://www.wewishes.com/uploads/images/202503/image67ceac708209f.webp", "/images/dev/avatar1.jpg", "/images/dev/1.jpg"]} description="Get access to my exclusive photos and content which I don't post everywhere else..." discount='90' originalPrice='1,999' price='99' imageSrc='https://www.wewishes.com/uploads/images/202503/image67ceac708209f.webp' />
          {/* <PremiumPackage /> */}
        </div>

      </div>
    </section>
  )
}


// const PremiumPackage = () => {
//   return <div className='p-6 bg-white rounded-md flex w-full gap-2'>
//     <div className='w-full h-full justify-between rounded-md flex flex-col overflow-hidden gap-2'>
//       <img className='w-full max-h-[50%]- rounded-md object-center object-cover' src="https://www.wewishes.com/uploads/images/202503/image67ceac708209f.webp" alt="Premium package image" />

//       <button className='text-sm hover:text-pink-500 cursor-pointer font-semibold'>View details</button>
//     </div>
//     <div className='w-full h-full justify-between rounded-md flex flex-col overflow-hidden gap-2'>
//       <div className='flex flex-col gap-2'>
//         <h2 className='uppercase font-semibold'>Gold  (89%)</h2>
//         <p className='text-xs'>Get access to my exclusive photos and content which I don&#39;t post everywhere else...</p>
//       </div>
//     </div>
//   </div>
// }


interface PremiumPackageProps {
  id: string,
  imageSrc: string;
  name: string;
  description: string;
  price: string;
  originalPrice: string;
  discount: string;
  proofPreviewUrls: string[];
  isPaid?: boolean
}

export const PremiumPackage = (props: PremiumPackageProps) => {
  const [currentPostIndex, setCurrentPostIndex] = useState(0);
  const [isDetailsShowing, setIsDetailsShowing] = useState(false);
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

  return (
    <>
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
      <div className="p-6 bg-white rounded-2xl shadow-lg w-full flex flex-col md:flex-row gap-4 border border-gray-200">
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
            {!props.isPaid && <button onClick={e => setIsDetailsShowing(true)} className="text-xs font-semibold text-pink-600 hover:underline cursor-pointer">View details</button>}
            <button className="px-4 py-2 bg-pink-500 text-white text-xs rounded-lg cursor-pointer shadow hover:bg-pink-600 active:bg-pink-700 transition-all">
              {props.isPaid ? "View Package" : "Buy Now"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};



export const ProfPreviewer = ({ src, alt = "Proof preview" }: { src: string, alt?: string }) => {
  // const useMediaContext = useFullScreenMediaContext();

  return <div className='w-full min-w-full aspect-square flex items-center- rounded-md overflow-hidden justify-center bg-black relative'>
    <img className='h-full w-full- select-none cursor-pointer' src={src} alt={alt} />

    {/* {postType === "video" && <div className='absolute inset-0 bg-black/50 flex items-center justify-center'>
            <button className='text-white text-6xl cursor-pointer'>
                <FaPlay />
            </button>
        </div>
        } */}
  </div>
}



export default PremiumPackageView