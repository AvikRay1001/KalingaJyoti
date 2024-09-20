import React from 'react'
import styles from './navbar.module.css';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <Image src="/vit.png" width={80} height={80} className={styles.vit}/>
        <div className={styles.kjlogo}>
          <span className={styles.logo}>KALINGA</span>
          <Image src="/kjlogo.png" width={60} height={60} className={styles.imglogo}/>
          <span className={styles.logo}>JYOTI</span>
        </div>
        <div className={styles.nav}>
          <div>Home</div>
          <div>Team</div>
          <div>Events</div>
        </div>
      </div>
      <div className={styles.herotitle}>
    
          KALINGA
          <br/>
          <span className={styles.jyoti}>JYOTI</span>
          <br/>
          <span className={styles.quote}>MADDI CHALLU</span>
        
      </div>
      <div className={styles.heroimg}>
        <Image src='/hero2.png' width={150} height={256} className={styles.side12}/>  
        <Image src='/hero2.png' width={150} height={256} className={styles.side1}/>  
        <Image src='/hero1.png' width={1050} height={800} className={styles.hero}/>
        <Image src='/hero2.png' width={150} height={256} className={styles.side2}/>
        <Image src='/hero2.png' width={150} height={256} className={styles.side22}/>
      </div>
    </div>
  )
}

export default Navbar
