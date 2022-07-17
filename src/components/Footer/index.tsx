import { memo } from 'react'
import { InstagramLogo, WhatsappLogo } from 'phosphor-react'

import styles from './Footer.module.css'

export const Footer = memo(() => {
  return (
    <footer className={styles.footer}>
      <div className={styles.social}>
        <a href='https://instagram.com/tapiocasmaragogi?igshid=YmMyMTA2M2Y='>
          <InstagramLogo size={32} color='white' />
        </a>
        <a href='https://api.whatsapp.com/send?phone=5581992869896&text=Ol%C3%A1%20gostaria%20de%20fazer%20o%20meu%20pedido!'>
          <WhatsappLogo size={32} color='white' />
        </a>
      </div>
      <p>©2022 All Rights Reserved.</p>
    </footer>
  )
})
