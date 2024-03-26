import { useState } from "react";

const Input = ({type, placeholder}) => {

    const [value, setValue] = useState("");

    const handleInputChange = (event) => {
        setValue(event.target.value);
    }

    return (
        <input type={type} placeholder={placeholder} value={value} onChange={handleInputChange} />
    )
}

export default Input;