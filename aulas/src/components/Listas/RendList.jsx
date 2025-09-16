const RendList = ({ itens }) => {

    return (
        <>
            <h3>Musicas</h3>

            <ul>
                {itens.length > 0 ? (
                    itens.map((e, index) => (
                        <li key={index}>{e}</li>
                    ))
                ) : (
                    <p>Não há coisas boas</p>
                )
                }
            </ul>
        </>
    )

}

export default RendList