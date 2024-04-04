import Layout from '../components/Layout';
import Image from 'next/image';
import "../styles/globals.css";
import styles from '../styles/index.module.css';
import React, { useEffect } from 'react';

const HomePage = () => {

  useEffect(() => {
    // JavaScript code to be executed after component mounts
    const image1 = document.querySelector(`.${styles.image1}`) as HTMLElement;
    const image2 = document.querySelector(`.${styles.image2}`) as HTMLElement;
    if (image1){
      setTimeout(() => {
        image1.style.opacity = '1'; // Set opacity to 1i
        image1.style.transition = 'opacity 1s ease-in-out';
      }, 1000);
    }
    if (image2){
      setTimeout(() => {
        image2.style.opacity = '1'; // Set opacity to 1
        image2.style.transition = 'opacity 1s ease-in-out';
      }, 2000);
    }
  }, []);

  return (
    <Layout>
      {/* Other page content */}
      <div className={`${styles.image_container} ${styles.hidden}`}>
        <img className={styles.image1} src="/wires.png" alt="Logo"/>
        <img className={styles.image2} src="/logo2.png" alt="Logo"/>

      </div>
    </Layout>
  );
};

export default HomePage;
