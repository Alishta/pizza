const Form = ({ children }) => {
    const handleFormSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <form className="login-form" onSubmit={handleFormSubmit}>
            {children}
        </form>
    )
}

export default Form;