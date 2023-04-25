/**
 * 공통 Button
 */

import styles from './Button.module.css'
interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    text: string
    buttonType: "PRIMARY_FILLED" | "PRIMARY_OUTLINED" | "SECONDARY_FILLED" | "SECONDARY_OUTLINED",
}

const Button = ({text, buttonType, ...props}: ButtonProps) => {
    return(
        <button className={`${styles['common-button']} ${styles[buttonType]}`} {...props}>{text}</button>
    )
}

export default Button   