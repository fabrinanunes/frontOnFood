import { IconGithub } from "@/icons";
import Link from "next/link";

import Styles from "./footer.module.css";

export function Footer() {
  return (
    <footer>
      <div className={Styles.footer}>
        <p>
            <Link href="https://github.com/fabrinanunes">
               <a>
                  <IconGithub />
                  
               </a>
            </Link>
            Fabrina Nunes @ 2022 - Imersão FrontExpert
         </p>
      </div>
    </footer>
  );
}