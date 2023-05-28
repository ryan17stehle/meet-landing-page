import Image from 'next/image'
import FirstImg from '../../../public/desktop/image-woman-in-videocall.jpg'
import SecondImg from '../../../public/desktop/image-women-videochatting.jpg'
import ThirdImg from '../../../public/desktop/image-men-in-meeting.jpg'
import FourthImg from '../../../public/desktop/image-man-texting.jpg'

export default function Main() {
  return (
    <main className='px-6 mb-16'>
        <div className='grid grid-cols-2 gap-6'>
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
        <div className='text-center mt-8 mb-16 w-5/6 mx-auto'>
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
    </main>
  )
}
