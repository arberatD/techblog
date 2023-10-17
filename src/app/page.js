"use client"
import Image from 'next/image'
import styles from './page.module.css'
import Button from '@/components/Button'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Main from '@/components/Main'
import { useState, useEffect } from 'react';


export default function Home() {

    const [counter, setCounter] = useState(0)
    const handleClick = () => {
      setCounter(counter + 2)
    }
  
    const resetCounter = () => {
      setCounter(0)
    }
  
  const [time, setTime] = useState(new Date());
  
    useEffect(() => {
      const timer = setInterval(() => {
        setTime(new Date());
      }, 1000);
  
      return () => {
        clearInterval(timer);
      };
    },[]);
  
  // Datumsausgabe in deutschem Format
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${day}.${month}.${year}`;
  
  return (
    <div>
    <main>
    <br></br>
    <Navigation />
    <button onClick={handleClick} className="btn-hover color-3" type="button" >Click mich!</button>
<h1>Counter: {counter}</h1>
<button onClick={resetCounter} className="btn-hover color-11" type="button" >Reset counter</button>
<h2>Es ist {time.toLocaleTimeString("de-DE")} Uhr am {currentDate}</h2>
    </main>
    <Main/>
    <Footer/>
    </div>
  )
}
