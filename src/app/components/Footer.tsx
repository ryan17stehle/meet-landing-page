import Image from "next/image"
import FooterImg from '../../../public/mobile/image-footer.jpg'

export default function Footer() {
    // footer has the bg image, a div should then have the bg color with opacity
    // the bg image adjusts to the height of the content in the footer/div containers
    return (
        <footer className="relative bg-footer-pattern-mobile bg-cover bg-no-repeat md:max-lg:bg-footer-pattern-tablet lg:bg-footer-pattern-desktop">
            <div className="bg-aqua opacity-90 text-center grid place-items-center gap-6 py-12 lg:grid-cols-3 lg:py-32">
                <h2 className="text-white text-med font-boldest w-4/6">
                    Experience more together
                </h2>
                <p className="font-base text-white text-body w-4/6">
                    Stay connected with reliable HD meetings 
                    and unlimited one-on-one and group video sessions.
                </p>
                <button 
                    className="py-3 px-8 text-overline font-boldest text-white bg-dark-purple rounded-[30px] hover:opacity-80"
                >
                    Download 
                    <span className="text-overline text-teal font-boldest"> v1.3</span>
                </button>
            </div>
        </footer>
    )
}