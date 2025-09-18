import styles from "./styles/Submit.module.css"

const Submit = ({text}) => {

    return (
        <div className={styles.container}>

            <button className={styles.btn} type="submit">{text}</button>

        </div>
    )

}

export default Submit