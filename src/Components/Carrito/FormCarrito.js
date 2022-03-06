
const FormCarrito=({label, name, onChange})=> {
    return (
        <>
            
                <label className="Card-Text" htmlFor={label}>{label}</label>
                <input type="text" id={label} name={name} onChange={onChange}
                ></input>

        </>

    )
}
export default FormCarrito