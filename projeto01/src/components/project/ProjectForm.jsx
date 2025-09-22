import { useEffect, useState } from "react"
import Input from "../form/input"
import Select from "../form/Select"
import Submit from "../form/Submit"
import styles from "./styles/ProjectForm.module.css"

const ProjectForm = ({btnText}) => {

    const [nome, setNome] = useState("")
    const [budget, setBudget] = useState()
    const [categoria, SetCategorias2] = useState()
    const [cateogiras, SetCategorias] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const novoProjeto = {
            nome,
            budget,
            categoria
        }

        try {
            const response = await fetch("http://localhost:8085/projects", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(novoProjeto)
            })

            if (!response.ok) {
                throw new Error(`Erro: ${response.status}`)
            }


            setNome("")
            setBudget("")
            SetCategorias2("")
        } catch (error) {
            console.log("Erro ao enviar dados", error)
        }
    }

    useEffect(() => {
        const fetchCategorias = async () => {
            try {
                const res = await fetch("http://localhost:8085/categorias")

                if (!res.ok) {
                    throw new Error(`Erro: ${res.status}`)
                }

                const data = await res.json()
                SetCategorias(data)
            } catch (err) {
                console.log(err)
            }
        }

        fetchCategorias()
    }, [])

    return (
        <form className={styles.form} onSubmit={handleSubmit} method="POST">

            <Input type={"text"} text={"Nome do Projeto: "} name={"nome"}placeholder={"Digite o nome do projeto"} handleOnChance={(e) => setNome(e.target.value)} value={nome}/>

            <Input type={"number"} text={"Orçamento do Projeto: "} name={"budget"} placeholder={"Insira o orçamento"} handleOnChance={(e) => setBudget(e.target.value)} value={budget} />

            <Select text={"Selecione a Categoria"} name={"categoryId"} options={cateogiras} value={categoria} handleOnChange={(e) => SetCategorias2(e.target.value)} />

            <Submit text={btnText} />

        </form>
    )

}

export default ProjectForm