import { useEffect, useState } from "react"
import styles from "./styles/NewProject.module.css"
import { Link } from "react-router-dom"

const Categoiras = () => {

    const [categorias, setCategorias] = useState([])

    useEffect(() => {
        const fetchCateogiras = async () => {
            try {
                const res = await fetch("http://localhost:8085/categorias")
                if(!res.ok) {
                    throw Error (`Erro: ${res.status}`)
                }
                const data = await res.json()
                setCategorias(data)
            } catch (err) {
                console.log(err)
            }
        }


        fetchCateogiras()

    }, [])

    const handleDelete = async (id) => {
        try {
            const res = await fetch(`http://localhost:8085/categorias/${id}`, {
                method: "DELETE"
            })

            if (!res.ok) {
                throw new Error("Falha ao deletar categoria!")
            }

            setCategorias(categorias.filter(categoria => categoria._id !== id))
        } catch (err) {
            console.log(err)
        }
    }

    
    
    return (
        <div className={styles.container}>
            <h1>Categorias: </h1>

            {categorias.map(categoria => (
                <div key={categoria._id} className={styles.divBtn}>

                    <div className={styles.divCard}>{categoria.nome}</div>
                    <button className={styles.btnDelet} onClick={() => handleDelete(categoria._id)}>Excluir</button>
                    <Link to={`/categorias/editar/${categoria._id}`}>
                        <button className={styles.btnDelet}>Editar</button>
                    </Link>

                </div>
            ))}

            <Link to={"/categorias/add"}>Crie uma Categoria</Link>
        </div>
    )

}

export default Categoiras