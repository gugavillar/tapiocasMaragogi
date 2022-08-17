import { Fragment } from 'react'

import { EffectCards } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Card } from '@components/Card'

import 'swiper/css'
import 'swiper/css/effect-cards'
import styles from './FoodBlock.module.css'

interface FoodBlockProps {
  title: string
  foods: Array<{
    id: string | number
    title: string
    src: string
    description: string
    price: number
  }>
}

export const FoodBlock = ({ title, foods }: FoodBlockProps) => {
  return (
    <Fragment>
      <h2 className={styles.title}>{title}</h2>
      <Swiper
        effect="cards"
        grabCursor={true}
        modules={[EffectCards]}
        className={styles.swiper}
        cardsEffect={{
          slideShadows: false
        }}
      >
        {foods?.map((food) => (
          <SwiperSlide key={food?.id}>
            <Card food={food} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Fragment>
  )
}
