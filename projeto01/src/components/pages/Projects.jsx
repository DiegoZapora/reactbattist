import { useEffect, useState } from "react"
import styles from "./styles/Projects.module.css"

const Projects = () => {

    const [projetos, Setprojetos] = useState([])

    useEffect(() => {
        const fechProjetos = async () => {
            try {
                const res = await fetch("http://localhost:8085/projects")

                if (!res.ok) {
                    throw new Error(`Erro: ${res.status}`)
                }

                const data = await res.json()
                Setprojetos(data)

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
        } catch (err) {
            console.log(err)
        }
    }

    return (

        <div className={styles.container}>
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

                                <button className={styles.botao}>Editar</button>
                                
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )

}

export default Projects