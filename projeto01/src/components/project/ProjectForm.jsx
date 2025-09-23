import { useEffect, useState } from "react"
import Input from "../form/input"
import Select from "../form/Select"
import Submit from "../form/Submit"
import styles from "./styles/ProjectForm.module.css"
import { useNavigate } from "react-router-dom"

const ProjectForm = ({btnText}) => {

    const navigate = useNavigate()

    const createPost = (project) => {
        project.cost = 0
        project.services = []
    }

    const [nome, setNome] = useState("")
    const [budget, setBudget] = useState()
    const [categoria, setCategoria] = useState("")
    const [pegoucategorias, SetPegouCategorias] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const novoProjeto = {
            nome,
            budget,
            categoria: categoria
        }

        try {
            const response = await fetch("http://localhost:8085/projects", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(novoProjeto)
            })
            .then(() => {
                navigate("/projects")
            })

            if (!response.ok) {
                throw new Error(`Erro: ${response.status}`)
            }


            setNome("")
            setBudget("")
            setCategoria("")
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
                SetPegouCategorias(data)
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

            <Select text={"Selecione a Categoria"} name={"categoryId"} options={pegoucategorias} handleOnChange={(e) => setCategoria(e.target.value)} value={categoria}/>

            <Submit text={btnText} />

        </form>
    )

}

export default ProjectForm