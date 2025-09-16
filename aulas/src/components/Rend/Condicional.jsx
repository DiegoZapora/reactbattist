import { useState } from "react"

const Condicional = () => {

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    const cadEmail = (e) => {
        e.preventDefault()
        setUserEmail(email)
    }

    const limparEmail = (e) => {
        setUserEmail("")
    }

    return (
        <section>
            <h2>Cadastro E-mail</h2>
            <form>
                <label htmlFor="email">E-mail: </label>
                <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} /> <br />
                <button type="submit" onClick={cadEmail}>Cadastar</button>
            </form>
            {userEmail && (
                <div>
                    <p>O e-mail foi cadastrado: {userEmail}</p>
                    <button onClick={limparEmail}>Limpar</button>
                </div>
            )}
        </section>
    )

}

export default Condicional