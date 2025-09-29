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

    const [isReady, setIsReady] = useState(false)



    useEffect(() => {

        const fetchCategorias = async () => {
            const res = await fetch("http://localhost:8085/categorias")
            const data = await res.json()
            setCategorias(data)
        }

        const fetchData = async () => {
            try {
                const res = await fetch(`http://localhost:8085/projects/${id}`)
                if (!res.ok) { throw new Error("Falha ao buscar projeto!") }

                const projetoData = await res.json()

                await fetchCategorias()

                setNome(projetoData.nome || "")
                setBudget(projetoData.budget || "")
                setCategoria(projetoData.categoria || {})

                setIsReady(true)

            } catch (err) {
                console.error("Erro ao carregar projeto", err)
                navigate("/projects")
            }
        }

        fetchData()

    }, [id, navigate])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const dadosAtualizados = {
            nome,
            budget: Number(budget),
            categoria: categoria._id
        }


        try {
            const res = await fetch(`http://localhost:8085/projects/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(dadosAtualizados)
            })

            if (!res.ok) { throw new Error("Falha ao atualizar projeto") }

            navigate("/projects")

        } catch (err) {
            console.error(err)
        }

    }

    return (

        <div className={styles.card}>

            {!isReady ? (
                <p>Carregando formuário de edição...</p>
            ) : (
                <form className={styles.form} onSubmit={handleSubmit}>
                    <Input
                        type={"text"}
                        text={"Novo Nome: "}
                        name={"nome"}
                        placeholder={"Digite o novo nome"}
                        handleOnChange={(e) => setNome(e.target.value)}
                        value={nome || ""}
                    />

                    <Input
                        type={"number"}
                        text={"Novo Orçamento: "}
                        name={"budget"}
                        placeholder={"Digite o novo orçamento"}
                        handleOnChange={(e) => setBudget(e.target.value)}
                        value={budget || ""}
                    />
                    <Select
                        text={"Selecione Categoria: "}
                        name={"categoria"}
                        value={categoria?._id}
                        options={categorias}
                        handleOnChange={(e) => {
                            const idSelecionado = e.target.value
                            const cat = categorias.find(c => c._id === idSelecionado)
                            setCategoria(cat)
                        }}
                    />
                    <Submit text={"Editar Projeto"} />
                </form>
            )}

        </div>

    )
}

export default EditProject