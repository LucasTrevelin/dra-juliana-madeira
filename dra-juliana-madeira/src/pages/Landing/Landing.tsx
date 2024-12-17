import React from 'react'
import Header from '../../components/Header/Header'
import * as S from './Landing.styles'
import Greetings from '../../components/Greetings/Greetings'

const Landing: React.FC = () => {
  return (
    <>
      <Header />
      <S.Section>
        <Greetings />
      </S.Section>
    </>
  )
}

export default Landing
