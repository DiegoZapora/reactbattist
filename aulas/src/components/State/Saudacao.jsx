const Saudacao = ({ nome }) => {

    let newNome = `Oi, ${nome}`

    return (
        <>
            {nome && (
                <p>{newNome}</p>
            )

            }
        </>
    )

}

export default Saudacao