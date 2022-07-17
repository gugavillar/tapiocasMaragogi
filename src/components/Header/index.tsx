import { memo } from 'react'
import { PhoneCall, MapPin } from 'phosphor-react'

import { Logo } from '../Icons/Logo'

import styles from './Header.module.css'

export const Header = memo(() => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <Logo />
        <div className={styles.info}>
          <address>
            <MapPin size={18} />
            <div>
              <p>Rua Jornalista José Filho, N˚ 98</p>
              <p>Gravatá - PE</p>
            </div>
          </address>
          <a href='tel:81992869896'>
            <PhoneCall size={18} />
            81 99286-9896
          </a>
        </div>
      </div>
    </header>
  )
})
