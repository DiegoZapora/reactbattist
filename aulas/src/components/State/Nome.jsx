const Nome = ({ setNome }) => {

    return (
        <>
            <label htmlFor="nome">Nome: </label>
            <input type="text" name="nome" id="nome" placeholder="Digite seu nome" onChange={(e) => setNome(e.target.value)} />
        </>
    )

}

export default Nome