function Input({
    label,
    value,
    onChange,
    placeholder,
    type="text"
})  {
    return(
        <div className="form-group">
            <label>{label}</label>

            <input
             type="text"
             value={value}
             onChange={onChange}
             placeholder={placeholder}
             className="form-input"
              />

        </div>
    );
}

export default Input;