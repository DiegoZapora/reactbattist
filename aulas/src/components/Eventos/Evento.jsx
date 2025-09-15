const Evento = ({numero}) => {

    const EventSas = () => {
        console.log(numero)
    }

    return (
        <section>
            <p>Sabe God</p>
            <button onClick={EventSas}>Ativar!</button>
        </section>
    )
}

export default Evento