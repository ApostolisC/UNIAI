'use client'
import React, { useEffect } from 'react';
import '../styles/globals.css';
import Image from 'next/image';
import styles from '../styles/page.module.css';


export default function Page() {
  
  return (
    
    <div className="relative">
          <div className="min-h-screen">
              <Image className={styles.image1} src="/wires.png" alt="Background Image" layout="fill" objectFit="none"/>
              <Image className={styles.image2} src="/logo2.png" alt="Overlay Image" layout="fill" objectFit="none"/>
          </div>
    </div>
  );
};
