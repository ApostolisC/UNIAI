import React from 'react';
import '../styles/globals.css';
import Image from 'next/image';
import styles from '../styles/page.module.css';

export default function Page() {
  return (
    <div className="relative my-auto mx-auto">
          <div className="relative">
              <Image src="/wires.png" alt="Background Image" layout="fill" objectFit="contain"/>
              <Image src="/logo2.png" alt="Overlay Image" className="" layout="fill" objectFit="none"/>
          </div>
          <p>test</p>
    </div>
  );
};
