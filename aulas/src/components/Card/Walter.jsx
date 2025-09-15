import WalterStype from "./Walter.module.css"

const Walter = ({ name, age, occupation, img }) => {
    return (
        <section className={WalterStype.card}>
            <p className={WalterStype.cardContent}>Nome: {name}</p>
            <p className={WalterStype.cardContent}>Idade: {age}</p>
            <p className={WalterStype.cardContent}>Profissão: {occupation}</p>
            <img src={img} alt={name + " Foto"} style={{ width: "150px", borderRadius: "10px" }} />
        </section>
    )
}

export default Walter