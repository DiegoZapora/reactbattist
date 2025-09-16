import { useState } from "react"

const Form = () => {

    const [nome, setNome] = useState("NA")
    const [senha, setSenha] = useState("NA")
    const [cont, setCont] = useState(0)

    const SubmitForm = (e) => {
        e.preventDefault()
        let nomeForm = document.createElement("p")
        nomeForm.innerHTML = `Nome: ${nome}`
        oi.appendChild(nomeForm)
        let senhaForm = document.createElement("p")
        senhaForm.innerHTML = `Senha: ${senha}`
        oi.appendChild(senhaForm)
    }

    return (
        <section id="oi">
            <form onSubmit={SubmitForm}>
                <h2>Faz o cadastro ai na moral</h2>

                <label htmlFor="nome">Nome: </label>
                <input type="text" name="nome" id="nome" placeholder="Digite seu nome" onChange={(e) => setNome(e.target.value)} /> <br />

                <label htmlFor="senha">Senha: </label>
                <input type="password" name="senha" id="senha" placeholder="Digite sua senha" onChange={(e) => setSenha(e.target.value)} /> <br />

                <button type="submit">Cadastrar</button> <br />
            </form>
            <p>{cont}</p>
            <button onClick={() => setCont(cont+1)}>+1</button>
        </section>
    )
}

export default Form