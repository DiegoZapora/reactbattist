import styles from "./styles/Select.module.css"

const Select = ({text, name, handleOnChange, value, options}) => {

    return (
        <div className={styles.form_control}>

            <label htmlFor={name}>{text}</label>
            <select name={name} id={name} onChange={handleOnChange} value={value}>
                <option value="0">Selecione uma Opção</option>
                {options.map((e) => (
                    <option value={e._id} key={e._id}>{e.nome}</option>
                ))}
            </select>

        </div>
    )

}

export default Select