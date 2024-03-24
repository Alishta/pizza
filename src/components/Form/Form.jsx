import Button from "../Button/Button"
import Input from "../Input/Input"

const Form = () => {

    return (
        <form className="login-form">
            <Input type="text" placeholder="Your full name"/>
            <Button text="Login" type="submit"/>
        </form>
    )
}

export default Form