import styles from "./styles/Loading.module.css"
import andre from "../../assets/300.png"

const Loading = () => {

    return (
        <div className={styles.loadingContainer}>
            <img className={styles.loadingImg} src={andre} alt="Loading" />
            <p>Carregando Projetos...</p>
        </div>
    )

}

export default Loading