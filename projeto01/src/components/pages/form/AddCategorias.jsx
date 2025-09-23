import FormCategorias from "./FormCategorias"
import styles from "../styles/NewProject.module.css"

const AddCategorias = () => {

    return (
        <div className={styles.container}>
            <FormCategorias btnText={"Adicionar Categoria"} />
        </div>
    )
}

export default AddCategorias