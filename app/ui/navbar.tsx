import Link from "next/link";
import { Search, ShoppingCart } from "lucide-react";
import { FaApple } from "react-icons/fa";
import Image from "next/image";

  


const NavBar = () => {
    return (
        <nav className="flex px-2 bg-[#04184B] h-14 items-center backdrop-filter backdrop-blur-lg bg-opacity-60 fixed w-full z-10">
            <div>

            </div>
            <div className="mx-auto">
                <Link href="/">
                        <div className="text-white flex justify-center content-center text-center gap-1">
                            <Image 
                            src="/leo-bala.png"
                            alt="Leo Bala"
                            width={150}
                            height={80}
                            />
                        </div>            
                </Link>
            </div>

            <ul className="flex gap-4 text-white -ml-10">
                <li><Search /></li>
                <li><ShoppingCart /></li>
            </ul>
        </nav>
    );
}

export default NavBar;