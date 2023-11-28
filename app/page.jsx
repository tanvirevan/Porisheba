import Image from 'next/image'
import Navbar from './global-components/navbar/Navbar'
import Link from 'next/link'
import Userpage from "./pages/home/user/page";
import modal from './global-components/modal';
export default function Home() {
  return (
    <div>
      <Userpage></Userpage>
      <modal></modal>
    </div>
    
  )
}
