import styles from './Button.module.scss';
console.log(styles);
const Button = ({ type, text, onClick }) => {
    return (
        <button type={type} onClick={onClick} className={styles.button}>
            {text}
        </button>
    );
};

export default Button;
