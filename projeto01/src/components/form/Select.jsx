import styles from "./styles/Select.module.css"

const Select = ({text, name, handleOnChange, value, options}) => {

    return (
        <div className={styles.form_control}>

            <label htmlFor={name}>{text}</label>
            <select name={name} id={name}>
                <option>Selecione uma Opção</option>
            </select>

        </div>
    )

}

export default Select