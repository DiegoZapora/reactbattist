import styles from "./styles/Footer.module.css"
import { FaGithub, FaLinkedin } from "react-icons/fa"

const Footer = () => {

    return (
        <footer className={styles.footer}>

            <ul className={styles.social_list}>

                <li>
                    <a href="https://github.com/DiegoZapora" target="_blank"><FaGithub style={{color: "white"}}/></a>
                </li>

                <li>
                    <a href="https://www.linkedin.com/in/diegozapora" target="_blank"><FaLinkedin style={{color: "white"}} /></a>
                </li>

            </ul>
        
        <p className={styles.copy_right}>Andre Matos Empresa &copy;</p>
        </footer>
    )

}

export default Footer