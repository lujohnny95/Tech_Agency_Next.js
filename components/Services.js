import styles from "../styles/Services.module.css"
import Link from "next/link"
import Image from "next/image"

const Services = ({ services }) => {
  return (
    <div className={styles.container}>
        <h2 className={styles.title}>What we can do?</h2>
        <h2 className={styles.subtitle}>Services we can help you with:</h2>
        <div className={styles.services}>
            {services.map((service) => (
                <Link key={service.id} href={`/products/${service.name}`} >
                    <div className={styles.service}>
                        <div className={styles.desc}>{service.desc}</div>
                        <span className={styles.cat}>{service.title}</span>
                        <div className={styles.media}>
                            {service.video ? (
                                <video src={`/images/${service.video}`} autoPlay loop className={styles.video}/>
                            ) : (
                                <Image src={`/images/${service.photo}`} width="100%" height="100%" layout="responsive" objectFit="cover" alt=""/>
                            )}
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default Services