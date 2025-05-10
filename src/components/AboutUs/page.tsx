import { AppData } from '@/utils/appdata';

const AboutUs = () => {
    return (
        <div className='w-full w-[30vw]- p-4 hidden md:flex pt-16'>
            <div className='flex flex-col items-center justify-center p-4'>
                <h1 className='text-2xl font-semibold'>About {AppData.name}</h1>
                <p className='text-gray-600 text-xs mt-3'>{`${AppData.name} is a community-driven platform created out of love and respect for fans who may not have the means to afford premium content from official sources. We believe that access to great content shouldn't be limited by financial barriers. Everyone deserves the opportunity to enjoy and connect with the creators and media they love.`}</p>
                <p className='text-gray-600 text-xs mt-2'>{`Our platform offers a highly affordable alternative that mirrors the quality and experience of official premium content, but at a price point that’s accessible to all. Whether you're a passionate fan on a budget or someone simply looking for a more cost-effective way to enjoy exclusive material, Justice Fans is here for you.`}</p>
                <p className='text-gray-600 text-xs mt-2'>{`We stand for fairness, inclusivity, and the idea that great content should bring people together—not leave them out. Our mission is simple: to democratize access to content and build a space where fans from all walks of life can feel seen, valued, and connected.`}</p>
                <p className='text-gray-600 text-xs mt-2'>{`At Justice Fans, we’re not just another platform—we’re a movement for accessibility, passion, and justice in the fan world.`}</p>
            </div>
        </div>
    )
}

export default AboutUs;