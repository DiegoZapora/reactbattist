import styles from "./Container.module.css"

const Container = (props) => {
    
    return (
        <section className={`${styles.card} ${styles[props.customClass]}`}>
            {props.children}
        </section>
    )

}

export default Container