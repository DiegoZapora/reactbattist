import { Link } from "react-router-dom";
import Container from "./Container";
import styles from "./styles/NavBar.module.css"
import andre from "../../assets/300.png"

const NavBar = () => {

    return (
        <nav className={styles.navbar}>

            <Container>

                <Link to={"/"}>
                    <img src={andre} alt="andre" style={{ width: "50px", borderRadius: "50%", marginLeft: "5px"}}/>
                </Link>
                
                <ul className={styles.list}>

                    <li className={styles.item}>
                        <Link to={"/"}>Início</Link>
                    </li>

                    <li className={styles.item}>
                        <Link to={"/company"}>Empresa</Link>
                    </li>

                    <li className={styles.item}>
                        <Link to={"/projects"}>Projetos</Link>
                    </li>

                    <li className={styles.item}>
                        <Link to={"/contact"}>Contato</Link>
                    </li>

                    <li className={styles.item}>
                        <Link to={"/categorias"}>Categorias</Link>
                    </li>

                </ul>

            </Container>

        </nav>
    )

}

export default NavBar