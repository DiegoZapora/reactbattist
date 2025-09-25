import styles from "../../project/styles/ProjectForm.module.css"
import Input from "../../form/input"
import Submit from "../../form/Submit"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const FormCategoria = ({btnText}) => {

    const navigate = useNavigate()

    const [nome, setNome] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()

        const novaCategoira = {
            nome
        }

        try {
            const res = await fetch("http://localhost:8085/categorias", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(novaCategoira)
            })



            if (!res.ok) {
                throw new Error(`Erro: ${res.status}`)
            }

            navigate("/categorias", {
                state: { message: "Categoria criada com sucesso", type: "success"}
            })
            
            setNome("")
        } catch (error) {
            console.log("Erro ao enviar dados", error)
        }
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit} method="POST">

            <Input type={"text"} text={"Nome da Categoria: "} name={"nome"} placeholder={"Digite o Nome da Categoria"} handleOnChance={(e) => setNome(e.target.value)} value={nome} />

            <Submit text={btnText}/>

        </form>
    )

}

export default FormCategoria