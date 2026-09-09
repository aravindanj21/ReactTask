function Select({
    label,
    value,
    onChange,
    options

})   {
    return (
        <div className="form-group">
            <label>{label}</label>

            <select
            
            value={value}
            onChange={onChange}
            className="form-input"
            >

            {options.map((option)=>(
                <option
                    key={option.value}
                    value={option.value}
                    >

                        {option.label}
                    </option>
            ))}

            </select>

        </div>
    );
}

export default Select;

