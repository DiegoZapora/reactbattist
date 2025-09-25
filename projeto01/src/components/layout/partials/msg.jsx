import styles from "./styles/Msg.module.css"

const Msg = ({type, msg}) => {

    if (!msg) {
        return null
    }

    return (
        <div className={`${styles.message} ${styles[type]}`}>
            <p>{msg}</p>
        </div>
    )

}

export default Msg