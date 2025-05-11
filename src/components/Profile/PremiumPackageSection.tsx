import React from 'react'

const PremiumPackageView = () => {
  return (
    <section className='w-full w-[30vw]- p-4 bg-gray-100 hidden md:flex pt-16- overflow-y-auto custom-scroll h-full'>
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


        <div className='flex flex-col gap-2 mt-6 w-full items-center'>
          <span className='text-lg'>Memberships</span>
          <PremiumPackage />
        </div>

      </div>
    </section>
  )
}


const PremiumPackage = () => {
  return <div className='p-6 bg-white rounded-md flex w-full gap-2'>
    <div className='w-full h-full justify-between rounded-md flex flex-col overflow-hidden gap-2'>
      <img className='w-full max-h-[80%]- rounded-md object-center object-cover' src="https://www.wewishes.com/uploads/images/202503/image67ceac708209f.webp" alt="Premium package image" />

      <button className='text-sm hover:text-pink-500 cursor-pointer font-semibold'>View details</button>
    </div>
    <div className='w-full h-full justify-between rounded-md flex flex-col overflow-hidden gap-2'>
      <p></p>
    </div>
  </div>
}

export default PremiumPackageView