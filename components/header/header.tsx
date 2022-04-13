import Link from "next/link";
import Image from "next/image";

import Style from "./header.module.css";
import { IconBookmark, IconHome } from "@/icons";

export function Header(){
   return (
      <header>
         <nav className={Style.nav}>
            <div className={Style.brand}>
               <Link href="/">
                  <a>
                     <Image 
                        src="/assets/icons/logo.svg" 
                        alt="frontOnFoodLogo" 
                        width={45} 
                        height={36} />
                     OnFood
                  </a>
               </Link>
            </div>
            <ul className="flex">
               <li>
                  <Link href="/">
                     <a>
                        <IconHome />
                        Home
                     </a>
                  </Link>
               </li>
               <li>
                  <Link href='/favorites'>
                  <a>
                     <IconBookmark />
                     Favorites
                  </a>
                  </Link>
               </li>
            </ul>
         </nav>
      </header>
   )
};