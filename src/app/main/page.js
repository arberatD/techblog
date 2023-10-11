import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Main from '@/components/Main'


export default function Home() {
  return (
    <div>
    <main>
    <br></br>
    <Navigation 
    textColor="black" 
    bgColor="black"/>
    </main>
    <Image 
        src="/713731.png"
        alt="hier sollte ein Main Foto sein" 
        width="713" height="731" style={{textAlign: 'center',
        display: "flex",
        justifyContent: "center"}} />
    <Main 
    textColor="black"
    bgColor="red"/>
    <Footer
    textColor="black" 
    bgColor="gold"/>
    </div>
  )
}
