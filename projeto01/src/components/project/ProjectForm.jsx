import mongoose from "mongoose"
import Input from "../form/input"
import Select from "../form/Select"
import Submit from "../form/Submit"
import styles from "./styles/ProjectForm.module.css"

const ProjectForm = ({btnText}) => {

    return (
        <form className={styles.form}>

            <Input type={"text"} text={"Nome do Projeto: "} name={"projectName"} placeholder={"Digite o nome do projeto"}/>

            <Input type={"number"} text={"Orçamento do Projeto: "} name={"projectBudget"} placeholder={"Insira o orçamento"} />

            <Select text={"Selecione a Categoria"} name={"categoryId"} />

            <Submit text={btnText} />

        </form>
    )

}

export default ProjectForm