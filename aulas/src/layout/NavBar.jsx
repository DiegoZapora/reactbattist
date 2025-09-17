import { Link } from "react-router-dom"
import styles from "./NavBar.module.css"

const NavBar = () => {

    return (
        <header >
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Link to={"/"}>Home</Link>
                </li>
                <li className={styles.item}>
                    <Link to={"/empresa"}>Empresa</Link>
                </li>
                <li className={styles.item}>
                    <Link to={"/contatos"}>Contato</Link>
                </li>
                <li className={styles.item}>
                    <Link to={"/andrematos"}>Andre</Link>
                </li>
            </ul>
        </header>
    )

}

export default NavBar