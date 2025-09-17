import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"
import styles from "./Footer.module.css"

const Footer = () => {

    return (
        <footer>
            <ul className={styles.list}>
                <li className={styles.li}>
                    <FaFacebook/>
                </li>
                <li className={styles.li}>
                    <FaInstagram />
                </li>
                <li className={styles.li}>
                    <FaLinkedin />
                </li>
            </ul>
        </footer>
    )

}

export default Footer