import Form from '../components/Form/Form';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const Auth = () => {
    const navigate = useNavigate();
    const { userName, setUserName } = useContext(AuthContext);

    const handleInputChange = (event) => {
        setUserName(event.target.value);
    };

    const handleRedirectUser = (e) => {
        navigate('/menu');
        e.preventDefault();
        console.log(`Username: ${userName}`);
    };

    return (
        <div className="login">
            <h1 className="title">Login</h1>
            <Form onSubmit={handleRedirectUser}>
                <Input
                    type="text"
                    value={userName}
                    placeholder="Your full name"
                    onChange={handleInputChange}
                />
                <Button text="Login" type="submit" />
            </Form>
        </div>
    );
};

export default Auth;
