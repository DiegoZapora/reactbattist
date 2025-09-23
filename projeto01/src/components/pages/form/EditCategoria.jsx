import { useState, useEffect } from "react"
import Input from "../../form/Input"
import Submit from "../../form/Submit"
import { useParams, useNavigate } from "react-router-dom"
import styles from "../../project/styles/ProjectForm.module.css"

const EditCategoria = () => {

    const { id } = useParams()
    const navigate = useNavigate()
    const [nome, setNome] = useState("")

    useEffect(() => {
        const fetchCategoria = async () => {
            const res = await fetch(`http://localhost:8085/categorias/editar/${id}`)
            const data = await res.json()
            setNome(data.nome)
        }

        fetchCategoria()

    }, [id])

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const res = await fetch(`http://localhost:8085/categorias/editar/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ nome })
            })

            if (!res.ok) {
                throw new Error("Falha ao atualizar categoria.")
            }

            navigate("/categorias")
        } catch (Err) {
            console.log(Err)
        }

    }

    return (
        <div className={styles.card}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <Input type={"text"} text={"Nome editado: "} name={"editCategoria"} placeholder={"Novo nome da Categoria"} handleOnChance={(e) => setNome(e.target.value)} value={nome}/>
                <Submit text={"Atualizar Categoria"} />
            </form>
        </div>
    )

}

export default EditCategoria