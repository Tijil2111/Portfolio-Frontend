import {useState,useEffect} from "react"
import LandingModule from '../Modules/Home/Home'
import Head from "next/head"
import Splash from "../Modules/Splash/Splash";

export default function Home() {
  const [loading, setLoading] = useState(false);
  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>setLoading(false),300000)
  },[])
  return (
    <div>
      <Head>
      <title>Tijil Agrawal</title>
      </Head>
      {loading ? <Splash/>  : <LandingModule/>}
    </div>
  )
}
