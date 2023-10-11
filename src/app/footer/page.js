import Image from 'next/image'
import styles from '../page.module.css'
import Button from '@/components/Button'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Main from '@/components/Main'


export default function Home() {
    return (
      <div>
        <main>
          <br></br>
          <Navigation textColor="black" bgColor="blue"/>
        </main>
        <Image 
        src="/718 678.png"
        alt="hier sollte ein foto sein" 
        width="718" height="678" style={{textAlign: 'center',
        display: "flex",
        justifyContent: "center"}} />
        
        <Main textColor="black" bgColor="gold"/>
        <Footer textColor="black" bgColor="blue"/>
      </div>
    );
  }
