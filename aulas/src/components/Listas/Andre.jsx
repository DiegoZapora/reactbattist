import ListAndre from "./ListAndre"

const Andre = () => {

    return (
        <>
            <h1>Musicas</h1>
            <ul>
                <ListAndre music="Mentalize" album="Mentalize" />
                <ListAndre music="Holy Land" album={"Holy Land"} />
                <ListAndre music="Endevour" album={"Time to be Free"} />
            </ul>
        </>
    )

}

export default Andre