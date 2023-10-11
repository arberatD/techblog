import Image from 'next/image'
import styles from './page.module.css'
import Button from '@/components/Button'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Main from '@/components/Main'

export default function Home() {
  return (
    <div>
    <main>
    <br></br>
    <Navigation />
    <Image
          src="/ts.jpg"
          alt="Image"
          width={250}
          height={250}
          className={styles.image}
        />
    </main>
    <Main/>
    <Footer/>
    </div>
  )
}
