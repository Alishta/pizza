import Button from "../Button/Button";
import Input from "../Input/Input";

const Form = () => {

    const handleFormSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <form className="login-form" onSubmit={handleFormSubmit}>
            <Input type="text" placeholder="Your full name"/>
            <Button text="Login" type="submit"/>
        </form>
    )
}

export default Form;