import styles from "../styles/Contact.module.css"
import Circle from "../components/Circle";

const Contact = () => {
  return (
    <div className={styles.container}>
        <Circle backgroundColor="dodgerblue" left="-40vh" top="-20vh" className={styles.circle}/>
        <Circle backgroundColor="blue" right="-30vh" bottom="-60vh" className={styles.circle}/>
        <h1 className={styles.title}>Get in Touch</h1>
        <form className={styles.form}>
            <input className={styles.inputS} type="text" placeholder="Name" />
            <input className={styles.inputS} type="text" placeholder="Phone" />
            <input className={styles.inputL} type="text" placeholder="Email" />
            <input className={styles.inputL} type="text" placeholder="Subject" />
            <textarea 
                className={styles.textarea}
                type="text"
                rows={6}
                placeholder="Message"
            />
            <button className={styles.button}>Submit</button>
        </form>
    </div>
  );
};

export default Contact;