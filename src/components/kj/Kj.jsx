import React from 'react'
import styles from './kj.module.css';
import Image from 'next/image';

const Kj = () => {
  return (
    <div className={styles.container}>
      <span className={styles.kjtitle}>About KALINGA JYOTI</span>
      <div className={styles.img}>
        <Image src="/firstback.png" width={600} height={600} className={styles.aboutTilt}/>
        <Image src="/firstfront.png" width={300} height={400} className={styles.aboutFront}/>
        <span className={styles.aboutdesc}>Celebrating the Culture of Odisha in VIT Chennai Kalinga Jyoti, the Odia Club at VIT Chennai, is more than just a student organization; it's a vibrant community that celebrates the rich tapestry of Odisha's culture and diversity. We are a passionate group of students dedicated to preserving and sharing the unique heritage of our state with fellow students and the wider VIT community.</span>
        <span className={styles.aboutdesc2}>Known for our vibrant events, we bring the essence of Odisha to life through a kaleidoscope of activities. Our flagship event, the Rath Yatra festival, is a spectacular showcase of devotion and artistry, where we recreate the iconic chariot procession in miniature, complete with traditional music and dance. It's a testament to our dedication to keeping cultural traditions alive and sharing them with enthusiasm.</span>
        <Image src="/second.png" width={700} height={400} className={styles.aboutsecond}/>
        <span className={styles.aboutdesc3}>But Kalinga Jyoti goes beyond just festivals. We organize food fairs featuring delectable Odia cuisine, and even art forms and dance performances. These events provide a platform for students to delve deeper into Odisha's diverse cultural landscape, fostering a sense of appreciation and understanding.</span>
        <Image src="/third.png" width={500} height={500} className={styles.aboutThird}/>
        <span className={styles.aboutdesc4}>We are not just about showcasing our culture; we also embrace inclusivity. Whether you are from Odisha or simply curious about its rich heritage, Kalinga Jyoti welcomes you with open arms. We provide a warm and supportive environment where you can connect with fellow Odia students, learn about our traditions, and even discover new facets of your own identity.</span>
        <Image src="/fourthback.png" width={600} height={600} className={styles.aboutTilt4}/>
        <Image src="/fourthfront.png" width={600} height={330} className={styles.aboutFourth}/>
        <span className={styles.aboutdesc5}>Join us on this journey to explore the vibrant diversities of Odisha! Become a part of Kalinga Jyoti and experience the warmth of our community, the richness of our culture, and the joy of celebrating our unique heritage.</span>
      </div>
    </div>
  )
}

export default Kj
