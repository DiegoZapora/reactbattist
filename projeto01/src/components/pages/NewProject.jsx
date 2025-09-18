import ProjectForm from "../project/ProjectForm"
import styles from "./styles/NewProject.module.css"

const NewProject = () => {

    return (
        <div className={styles.container}>
            <h1>Criar Projeto</h1>
            <ProjectForm btnText="Criar Projeto" />
        </div>
    )

}

export default NewProject