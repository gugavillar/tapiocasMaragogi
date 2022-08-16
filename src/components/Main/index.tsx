import { DATA_SALGADAS } from '../../constants/data'
import { FoodBlock } from '../FoodBlock'
import styles from './Main.module.css'

export const Main = () => {
  return (
    <main className={styles.main}>
      <FoodBlock
        title="Tapiocas Salgadas"
        foods={DATA_SALGADAS}
      />
    </main>
  )
}
