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
    textColor="yellow" 
    bgColor="yellow"/>
    </main>
    <Image 
        src="/742 713.png"
        alt="hier sollte das Navi Foto sein" 
        width="742" height="713" style={{textAlign: 'center',
        display: "flex",
        justifyContent: "center"}} />
    <Main 
    textColor="black"
    bgColor="green"/>
    <Footer
    textColor="black" 
    bgColor="brown"/>
    </div>
  )
}
