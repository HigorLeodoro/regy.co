import styles from '../../styles/about.module.css';
import Navbar from '../components/Navbar';

export default function About() {
 return (
   <div>
      <Navbar/>
      <main className={styles.background}></main>
   </div>
 );
}