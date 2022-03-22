import Link from "next/link"
import Image from "next/image"
import styles from "../styles/Footer.module.css"

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cardL}>
        <h1 className={styles.title}>Tech Connect</h1>
        <h2 className={styles.linkTitle}>
          <Link href={"/contact"} className={styles.link} passHref>
            <>
              <span className={styles.linkText}>Connect with us!</span>
              <Image 
                src={"/images/link.png"}
                width="40px"
                height="40px"
                alt="link logo"
              />
            </>
          </Link>
        </h2>
      </div>
      <div className={styles.cardS}>
        <div className={styles.cardItem}>
          Liverpool,
          <br/> Merseyside, UK
        </div>
        <div className={styles.cardItem}>
          contact_us@techconnect.co.uk
        </div>
      </div>
      <div className={styles.cardS}>
        <div className={styles.cardItem}>
          © 2022 Tech Connect,
          <br /> All Rights Reserved
        </div>
      </div>
    </div>
  );
};

export default Footer