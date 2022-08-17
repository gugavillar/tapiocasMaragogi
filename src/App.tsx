import { Fragment } from 'react'

import { Footer } from '@components/Footer'
import { Header } from '@components/Header'
import { Main } from '@components/Main'

import '@styles/global.css'

export const App = () => {
  return (
    <Fragment>
      <Header />
      <Main />
      <Footer />
    </Fragment>
  )
}
