import styles from "../styles/Testimonials.module.css"
import { users } from "../data"
import Image from "next/image"

const Testimonials = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Testimonials</h1>
        <div className={styles.wrapper}>
            {users.map(user => (
                <div className={styles.card} key={user.id}>
                    <Image src={`/images/${user.logo}`} width="30" height="30" alt=""/>
                    <p className={styles.comment}>{user.comment}</p>
                    <div className={styles.person}>
                        <Image 
                            className={styles.avatar}
                            src={`/images/${user.avatar}`}
                            width="50"
                            height="50"
                            objectFit="cover"
                            alt=""
                        />
                        <div className={styles.info}>
                            <span className={styles.username}>{user.name}</span>
                            <span className={styles.jobTitle}>{user.title}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Testimonials;