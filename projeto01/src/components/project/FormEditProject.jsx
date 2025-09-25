import { useEffect, useState } from "react"
import Input from "../form/input"
import Select from "../form/Select"
import Submit from "../form/Submit"
import styles from "./styles/ProjectForm.module.css"
import { useNavigate, useParams } from "react-router-dom"

const EditProject = () => {

    const navigate = useNavigate()
    const { id } = useParams()

    const [nome, setNome] = useState("")
    const [budget, setBudget] = useState("")
    const [categoria, setCategoria] = useState({})
    const [categorias, setCategorias] = useState([])
    const [message, setMessage] = useState(null)

    useEffect(() => {
        if (location.state && location.state.message) {
            setMessage( {msg: location.state.message, type: location.state.type})
        } else {
            setMessage(null)
        }

        const timer = setTimeout(() => {
            setMessage(null)
        }, 3000)
    }, [location.state])

    useEffect(() => {
            const fetchProjetos = async () => {
                const res = await fetch(`http://localhost:8085/projects/editar/${id}`)
                const data = await res.json()
                setNome(data.nome)
                setBudget(data.budget)
                setCategoria(data.categoria)
            }

            fetchProjetos()

            const fetchCategorias = async () => {
                const res = await fetch("http://localhost:8085/categorias")
                const data = await res.json()
                setCategorias(data)
            }

            fetchCategorias()
    }, [id])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const dadosAtualizados = {
            nome,
            budget,
            categoria: categoria._id
        }

        try {
            const res = await fetch(`http://localhost:8085/projects/editar/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(dadosAtualizados)
            })

            if (!res.ok) {
                throw new Error("Falha ao atualizar Projeto")
            }

            navigate("/projects", {
                state: { message: "Projeto Editado com sucesso", type: "success"}
            })
        } catch (err) {
            navigate("/projects", {
                state: { message: "Projeto Editado com sucesso", type: "success"}
            })
        }
    }



    return (
        <div className={styles.card}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <Input type={"text"} text={"Atualize o Nome do Projeto: "} name={"nome"} placeholder={"Digite o nome do projeto"} handleOnChance={(e) => setNome(e.target.value)} value={nome} />
                <Input type={"number"} text={"Atualize Orçamento do Projeto: "} name={"budget"} placeholder={"Insira o orçamento"} handleOnChance={(e) => setBudget(e.target.value)} value={budget} />
                <Select text={"Selecione a Categoria"} name={categoria} options={categorias} value={categoria._id} handleOnChange={(e) => {
                    const idSelecionado = e.target.value
                    const cat = categorias.find(c => c._id === idSelecionado)
                    setCategoria(cat)
                }}/>
            
                <Submit text={"Atualizar Projeto"}/>
            </form>
        </div>
    )

}

export default EditProject