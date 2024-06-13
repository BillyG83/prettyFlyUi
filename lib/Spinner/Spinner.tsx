import { ISpinnerProps } from './types'
import styles from './styles.module.scss'

const Spinner = ({ color = 'white', text }: ISpinnerProps) => {
  return (
    <div aria-busy="true" className={styles.wrap} role="alert">
      <span className={styles.spinner} style={{ borderTopColor: color }} />
      {text && text}
    </div>
  )
}

export default Spinner
