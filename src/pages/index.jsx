import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

// import { useEffect, useState } from "react";

import styles from "../../styles/styles.module.css";

import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";



export default function Home() {
  

  return (
    <div className={styles.render}>
        <Navbar/>
        <Carousel/>

      
    </div>
  );
}
