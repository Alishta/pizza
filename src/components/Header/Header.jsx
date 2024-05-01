import styles from './Header.module.scss';
// console.log(styles);

const Header = ({ text }) => {
    return (
        <header className={styles.header}>
            <a className={styles.logo} href="/">
                {text}
            </a>
        </header>
    );
};

export default Header;
