import { useEffect, useState } from "react"
import styles from "./styles/Projects.module.css"
import { Link, useLocation, useNavigate } from "react-router-dom"
import Msg from "../layout/partials/msg"
import Loading from "../layout/Loading"

const Projects = () => {

    const [projetos, Setprojetos] = useState([])
    const [message, setMessage] = useState(null)
    const [removeLoading, setRemoveLoading] = useState(false)

    const location = useLocation()
    const navigate = useNavigate()


    useEffect(() => {
        if (location.state && location.state.message) {
            setMessage({ msg: location.state.message, type: location.state.type })
        }

        const timer = setTimeout(() => {
            setMessage(null)
        }, 3000)
    }, [location.state])

    useEffect(() => {

        const fechProjetos = async () => {
            try {
                const res = await fetch("http://localhost:8085/projects")

                if (!res.ok) {
                    throw new Error(`Erro: ${res.status}`)
                }

                const data = await res.json()
                Setprojetos(data)
                setRemoveLoading(true)

            } catch (err) {
                console.log(err)
            }
        }

        fechProjetos()

    }, [])

    const handleDelete = async (id) => {
        try {
            const res = await fetch(`http://localhost:8085/projects/${id}`, {
                method: "DELETE"
            })

            if (!res.ok) {
                throw new Error(`Erro: ${res.status}`)
            }

            Setprojetos(projetos.filter(projeto => projeto._id !== id))
            navigate("/projects", {
                state: { message: "Projeto deletado com sucesso", type: "success" }
            })
        } catch (err) {
            navigate("/projects", {
                state: { message: "Erro ao deletar Projeto!", type: "error" }
            })
        }
    }

    return (

        <div className={styles.container}>
            <div className={styles.divSamp}>
                <Link className={styles.botao} to={"/newproject"}>Criar Projeto</Link>
            </div>
            {message && <Msg msg={message.msg} type={message.type} />}
            <h1>Projetos: </h1>
            {projetos.length === 0 ? (
                <p>Nenhum projeto cadastrado.</p>
            ) : (
                <div className={styles.divProjetosContainer}>
                    {projetos.map(projeto => (
                        <div className={styles.divProjetos} key={projeto._id}>
                            <h3>{projeto.nome}</h3>
                            <p>Orçamento: {projeto.budget}</p>
                            <small>Categoria: {projeto.categoria?.nome}</small>
                            <div className={styles.divBotoes}>

                                <button className={styles.botao} onClick={() => handleDelete(projeto._id)}>Excluir</button>

                                <Link className={styles.botao} to={`/projects/${projeto._id}`}>Editar</Link>

                            </div>
                        </div>
                    ))}
                </div>
            )}
            {!removeLoading && <Loading />}
        </div>
    )

}

export default Projects