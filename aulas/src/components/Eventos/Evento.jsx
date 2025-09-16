import Butao from "./Butao"

const Evento = () => {

    const EventSas = () => {
        console.log("Eae")
    }

    const favorito = () => {
        console.log("Favoritado")
    }

    return (
        <section>
            <Butao event={EventSas} text="Andre Matos"/> <br />
            <Butao event={favorito} text="Samp"/> <br />
        </section>
    )
}

export default Evento