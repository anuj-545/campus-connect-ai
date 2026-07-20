import "./Input.css"
function Input({ label, type, name, placeholder, value, onChange, error}){
    return(
        <div className="input-group">
            <label htmlFor={name}>{label}</label>

            <input
                id={name}
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />

            {error && <p className = "error-message">{error}</p>}
        </div>
    );

}

export default Input;