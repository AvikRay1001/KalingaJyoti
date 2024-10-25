import React from 'react'
import styles from "./events.module.css"
import Image from 'next/image'

const Events = () => {
  return (
    <div className={styles.container}>
        <span className={styles.title}>MAIN EVENTS</span>
        <div className={styles.content}>    
            <div className={styles.events}>
                <div className={styles.event}>
                    <Image src="/event1.png" width={138} height={138} className={styles.img2}/>
                    <span className={styles.title2}>
                        EVENT NAME
                        <br/>
                        <span className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, ad iusto repellendus autem sunt dolorum.</span>
                    </span>
                </div>
                <div className={styles.event}>
                    <Image src="/event2.png" width={138} height={138}/>
                    <span className={styles.title2}>
                        EVENT NAME
                        <br/>
                        <span className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, ad iusto repellendus autem sunt dolorum.</span>
                    </span>
                </div>
                <div className={styles.event}>
                    <Image src="/event3.png" width={138} height={138}/>
                    <span className={styles.title2}>
                        EVENT NAME
                        <br/>
                        <span className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, ad iusto repellendus autem sunt dolorum.</span>
                    </span>
                </div>
            </div>
            <div className={styles.img}>
                <Image src="/mainevents.png" width={400} height={500}/>
            </div>
        </div>
    </div>
  )
}

export default Events
