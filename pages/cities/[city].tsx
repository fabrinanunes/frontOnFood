import { useRouter } from "next/router";

export default function Cities(){
   const router = useRouter();
   const city = router.query.city
   
   return <h1>City, {city}</h1>
} 