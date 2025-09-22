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
    
    return (
        <div className={styles.container}>
            <h1>Categorias: </h1>
            {categorias.map(categoria => (
                <p key={categoria._id}>{categoria.nome}</p>
            ))}
            <Link to={"/categorias/add"}>Crie uma Categoria</Link>
        </div>
    )

}

export default Categoiras