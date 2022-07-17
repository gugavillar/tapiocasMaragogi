import { FoodBlock } from '../FoodBlock'

import { DATA_SALGADAS } from '../../constants/data'

import styles from './Main.module.css'

const FOODS = [
  {
    id: '1',
    title: 'Tradicional de coco',
    src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50',
    description: 'Massa de tapioca recheada com coco fresco',
    price: 4.0
  },
  {
    id: '2',
    title: 'Coco e queijo',
    src: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50',
    description: 'Massa de tapioca recheada com coco fresco e queijo coalho',
    price: 6.0
  }
]

export const Main = () => {
  return (
    <main className={styles.main}>
      <FoodBlock title='Tapiocas Salgadas' foods={DATA_SALGADAS} />
      <FoodBlock title='Tapiocas Doces' foods={FOODS} />
      <FoodBlock title='Tapiocas Nordestinas' foods={FOODS} />
    </main>
  )
}
