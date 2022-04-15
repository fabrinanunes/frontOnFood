import { useRouter } from "next/router";
import { PageTemplate, DisheList } from "@/components";
import Styles from "../../styles/city.module.css";

export default function Cities(){
   const router = useRouter();
   const city = router.query.city;

   return(
      <PageTemplate>
         <div className={Styles.content}>
            <h1>Opções para {city}</h1>
            <div className={Styles.item}>
               <DisheList />
               <DisheList />
            </div>
         </div>
      </PageTemplate>
   );
}  