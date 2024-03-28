import Form from "../components/Form/Form"
import Input from "../components/Input/Input"
import Button from "../components/Button/Button"

const Auth = () => {
    return (
        <div className="login">
            <h1 className="title">Login</h1>
            <Form>
                <Input type="text" placeholder="Your full name" />
                <Input type="email" placeholder="Enter your email" />
                <Input type="password" placeholder="Enter your password" />
                <Button text="Login" type="submit" />
            </Form>
        </div>
    )
}

export default Auth