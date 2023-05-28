import Image from 'next/image'
import FirstImg from '../../../public/desktop/image-woman-in-videocall.jpg'
import SecondImg from '../../../public/desktop/image-women-videochatting.jpg'
import ThirdImg from '../../../public/desktop/image-men-in-meeting.jpg'
import FourthImg from '../../../public/desktop/image-man-texting.jpg'

export default function Main() {
  return (
    <main className='px-6 mb-20'>
        <div className='grid place-items-center mb-20 xl:mt-20'>
            <svg width="1" height="100">
                <line x1="0" y1="0" x2="0" y2="100" stroke="gray" stroke-width="1" />
            </svg>
            <span className=' rounded-[50%] px-2 py-1 border-2 border-gray text-gray'>01</span>
        </div>
        <div className='grid grid-cols-2 gap-6 md:grid-cols-4'>
            <Image 
                src={FirstImg}
                alt="woman in a video call on laptop"
                className='rounded-[8px]'
            />
            <Image 
                src={SecondImg}
                alt="three women video chatting"
                className='rounded-[8px]'
            />
            <Image 
                src={ThirdImg}
                alt="two men in a virtual meeting on laptops"
                className='rounded-[8px]'
            />
            <Image 
                src={FourthImg}
                alt="a man texting on his phone"
                className='rounded-[8px]'
            />
        </div>
        <div className='text-center mt-16 w-5/6 mx-auto md:w-4/6 lg:w-1/2 xl:w-2/5'>
            <p className='font-boldest text-aqua text-base uppercase tracking-[4px]'>
                built for modern use
            </p>
            <h2 className='text-med text-black font-boldest mt-6'>
                Smarter meetings, all in one place
            </h2>
            <p className='font-base text-gray text-bas mt-6'>
                Send messages, share files, show your screen, and record your 
                meetings — all in one workspace. Control who can join with 
                invite-only team access, data encryption, and data export.
            </p>
        </div>
        <div className='grid justify-items-center -mb-24 mt-20'>
            <svg width="1" height="100">
                <line x1="0" y1="0" x2="0" y2="100" stroke="gray" stroke-width="1" />
            </svg>
            <span className='bg-white relative z-10 rounded-[50%] px-2 py-1 border-2 border-gray text-gray'>02</span>
        </div>
    </main>
  )
}
