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

const brazilPrice = Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL'
})

export const Card = ({ food: { title, src, description, price } }: CardProps) => {
  return (
    <div className={styles.card}>
      <img src={src} alt={title} />
      <div className={styles.info}>
        <strong>{title}</strong>
        <p>{description}</p>
        <span>{brazilPrice.format(price)}</span>
      </div>
    </div>
  )
}
