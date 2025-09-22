import styles from "./styles/Home.module.css"
import vassoura from "../../assets/Capturar.PNG"
import LinkButton from "../layout/LinkButton"
import { Link } from "react-router-dom"

const Home = () => {

    return (
        <section className={styles.container}>
            <h1>Bem-vindo ao <span>Samp</span></h1>
            <p>Comece a jogar Samp agora mesmo!</p>
            <LinkButton to={"/newproject"} text={"Crie um novo projeto"}/>
            <img src={vassoura} alt="Vassoura" />
        </section>
    )

}

export default Home