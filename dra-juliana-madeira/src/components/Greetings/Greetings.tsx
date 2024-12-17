import React from 'react'

import * as S from './Greetings.styled'
import Button from '../Button/Button'
import { theme } from '../../global.styled'

const Greetings: React.FC = () => {
  return (
    <S.Container>
      <S.Greetings> Olá, Paciente </S.Greetings>
      <S.IntroFrame>
        <S.FirstMessage>
          Seja muito bem-vindo! <br />
          Neste site, você vai poder agendar sua consulta, ter conhecimento do
          meu trabalho, dos equipamentos que utilizo assim como me conhecer
          melhor
        </S.FirstMessage>
        <S.SecondMessage>
          Espero que possamos ter uma próspera relação de cuidados à sua saúde e
          bem-estar.
        </S.SecondMessage>
        <Button background={theme.colors.white} color={theme.colors.white}>
          Agende sua consulta
        </Button>
      </S.IntroFrame>
    </S.Container>
  )
}

export default Greetings
