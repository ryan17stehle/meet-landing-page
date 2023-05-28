import Image from "next/image"
import MeetLogo from "../../../public/logo.svg"

export default function Logo() {
  return (
    <div className="flex justify-center mt-8 mb-8">
        <Image 
            src={MeetLogo}
            alt="Meet logo"
        />
    </div>
  )
}
