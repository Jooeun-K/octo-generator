import { MouseEvent, PropsWithChildren } from 'react'
import styles from './CalcButton.module.css'

const DEFAULT_BUTTON_COLOR = '#2D2A37'

interface CalcButtonProps {
  onClick: (e: MouseEvent<HTMLButtonElement>) => void
  value: string
  buttonColor?: string
}

const CalcButton = ({ buttonColor, value, onClick }: CalcButtonProps) => {
  return (
    <button
      type="button"
      data-value={value}
      style={{
        backgroundColor: buttonColor || DEFAULT_BUTTON_COLOR,
        color: 'white',
        width: 'calc(33.33% - 20px)',
        aspectRatio: '1/1',
        lineHeight: '50px',
        textAlign: 'center',
        border: 'none',
        borderRadius: '50%',
      }}
      className={styles.calcButton}
      onClick={onClick}
    >
      {value}
    </button>
  )
}

export default CalcButton
