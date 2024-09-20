import styles from './about.module.css'
import Image from 'next/image'

const About = () => {
  return (
    <>
    <div className={styles.container}>
        <div className={styles.text}>
            <span className={styles.title}>About ODISHA</span>
            <span className={styles.desc}>Odisha, on India's eastern coast, is a land of stunning diversity. Visit the majestic Konark Sun Temple, a UNESCO World Heritage Site, and sail across Chilka Lake, Asia's largest lagoon, where migratory birds grace the sunset. Discover the unique customs, dances, and crafts of 62 distinct tribes.

Nature lovers can explore Similipal National Park, home to tigers and exotic flora, or watch endangered Olive Ridley turtles nest on Gahirmatha’s beaches. Immerse yourself in Odia culture through melodic folk music and vibrant festivals like the Rath Yatra. Odisha is a captivating land of endless wonders and possibilities.</span>
        </div>
        <div className={styles.img}>
            <Image src="/about.png" width={500} height={300} className={styles.about}/>
            <Image src="/about-tilt.png" width={600} height={600} className={styles.aboutTilt}/>
        </div>
    </div>
    <div className={styles.container2}>
        <Image src="/card1.png" width={200} height={200} className={styles.card1Img}/>
        <div className={styles.cards1}>
            <div className={styles.cards1title}>
                Konark<br/>Temple<br/>
            </div>
            <span className={styles.cards1desc}>  
                Chariot<br/>
                Wheel
            </span>
        </div>
        <Image src="/card2.png" width={200} height={200} className={styles.card2Img}/>
        <div className={styles.cards2}>
            <div className={styles.cards2title}>
                State Dance
            </div>
            <span className={styles.cards2desc}>  
                Odissi
            </span>
        </div>
        <div className={styles.cards3}>
        <Image src="/card3.png" width={200} height={200} className={styles.card3Img}/>
            State Bird
            <span className={styles.cards3desc}>  
                Indian<br/>
                Roller
            </span>
        </div>

        <div className={styles.cards4}>
        <Image src="/card4.png" width={200} height={200} className={styles.card3Img}/>
            State Animal
            <span className={styles.cards4desc}>  
                Sambar<br/>
                Deer
            </span>
        </div>
    </div>
    </>
  )
}
export default About