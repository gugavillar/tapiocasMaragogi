import { brazilPrice } from '@formatters/currency'

import styles from './Card.module.css'

interface CardProps {
  food: {
    id: string | number
    title: string
    src: string
    description: string
    price: number
  }
}

export const Card = ({
  food: { title, src, description, price }
}: CardProps) => {
  return (
    <div className={styles.card}>
      <img
        src={src}
        alt={title}
      />
      <div className={styles.info}>
        <strong>{title}</strong>
        <p>{description}</p>
        <span>{brazilPrice.format(price)}</span>
      </div>
    </div>
  )
}
