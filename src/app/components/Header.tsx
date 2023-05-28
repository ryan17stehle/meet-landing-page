import Image from "next/image"
import HeroLeft from '../../../public/desktop/image-hero-left.png'
import HeroRight from '../../../public/desktop/image-hero-right.png'

export default function Header() {
  return (
    <header className="flex flex-wrap overflow-x-hidden justify-center">
      <Image 
        src={HeroLeft}
        alt="Photos of people"
        className="w-1/2 relative -left-2"
      />
      <Image 
        src={HeroRight}
        alt="Photos of people"
        className="w-1/2 relative -right-2"
      />
      <div className="w-4/6 text-center mt-8 mb-12">
        <h1 className=" text-h2 font-boldest text-black mb-8">Group Chat for Everyone</h1>
        <p className="text-overline text-gray font-base mb-8">
          Meet makes it easy to connect with others face-to-face virtually and 
          collaborate across any device.
        </p>
        <div className="flex flex-col gap-8">
          <button className="py-2 text-overline font-boldest text-white bg-aqua rounded-[30px]">
            Download 
            <span className="text-overline text-teal font-boldest"> v1.3</span>
          </button>
          <button className="py-2 text-overline font-boldest text-white bg-dark-purple rounded-[30px]">
            What is it?
          </button>
        </div>
      </div>
    </header>
  )
}
