import Image from "next/image";
import Error from "../public/image/loading-2801.gif";

export default function NotFound() {
    return (
        <>
            <div>
                <Image src={Error} alt="404" className="w-[400px] mx-auto  " />
            </div>
        </>
    );
}