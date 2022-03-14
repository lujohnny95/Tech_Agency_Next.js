import Image from "next/image"
import styles from "../styles/Intro.module.css"
import Circle from "./Circle";

const Intro = () => {
    
    return (
        <div className={styles.container}>
            {/* <Circle backgroundColor="01c686" top="-60vh" left="-60vh"/> */}
            <div className={styles.card}>
                <h1 className={styles.title}>
                <span className={styles.brand}>Tech Connect</span> Digital Product Agency</h1>
                <p className={styles.desc}>
                    We pride ourselves in creating top digital content in a fast-moving tech environment..!
                </p>
                <button className={styles.btn}>Discover</button>
            </div>
            <div className={styles.card}>
                <Image src="/images/tech_agency.png" width="100%" height="100%" layout="fill" objectFit="cover" alt="tech agency"/>
            </div>
        </div>
    )
}

export default Intro