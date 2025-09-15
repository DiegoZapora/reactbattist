const Form = () => {
    
    const SubmitForm = (e) => {
        if (nome.value == "") {
            e.preventDefault()
            alert("SAMP")
        }
    }

     return (
        <section>
            <form onSubmit={SubmitForm}>
                <label htmlFor="nome">Nome: </label>
                <input type="text" name="nome" id="nome" placeholder="Digite seu nome" />
                <button type="submit">Cadastrar</button>
            </form>
        </section>
    )
}

export default Form