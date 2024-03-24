const Header = ({text}) => {

    return (
        <header className="header">
            <a className="logo" href="/">{text}</a>
        </header>
    )
}

export default Header