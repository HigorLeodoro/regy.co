import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { useEffect, useState } from "react";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import styles from "./styles.module.css";


export default function Home() {
    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
      function handleWindowResize() {
        setWindowSize(getWindowSize());
      }
  
      window.addEventListener("resize", handleWindowResize);
  
      return () => {
        window.removeEventListener("resize", handleWindowResize);
      };
    }, []);
  
    function getWindowSize() {
      const { innerWidth: width, innerHeight: height } = window;
      return { width, height };
    }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Carousel
        emulateTouch={true}
        useKeyboardArrows={true}
        showArrows={true}
        showThumbs={false}
        transitionTime={2000}
        swipeScrollTolerance={150}
        autoPlay={false}
        interval={6500}
        stopOnHover={false}
        showStatus={false}
        renderIndicator={false}
      >
        <main style={windowSize} className={styles.content}></main>
        <main style={windowSize} className={styles.content}></main>
      </Carousel>
    </div>
  );
}
