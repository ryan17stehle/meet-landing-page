import Image from "next/image"
import FooterImg from '../../../public/mobile/image-footer.jpg'

export default function Footer() {
  return (
    <footer className="bg-aqua relative text-center min-h-[480px] grid place-items-center">
        <Image 
            src={FooterImg} 
            alt="woman on laptop"
            className="max-w-full opacity-10 absolute"
        />
        <div className="w-4/6">
            <h2 className="text-white text-med font-boldest pt-12 pb-6">
                Experience more together
            </h2>
            <p className="font-base text-white text-body pb-6">
                Stay connected with reliable HD meetings 
                and unlimited one-on-one and group video sessions.
            </p>
            <button 
                className="mb-20 py-2 w-full text-overline font-boldest text-white bg-dark-purple rounded-[30px]"
            >
                Download 
                <span className="text-overline text-teal font-boldest"> v1.3</span>
            </button>
        </div>
    </footer>
  )
}