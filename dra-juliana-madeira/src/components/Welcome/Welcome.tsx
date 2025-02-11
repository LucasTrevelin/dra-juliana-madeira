import React, { useRef } from 'react'

import * as S from './Welcome.styled'

const Welcome: React.FC = () => {
  const scrollRef = useRef(null)

  return (
    <S.Container
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ root: scrollRef, once: true }}
      transition={{ ease: 'linear', delay: 0.5 }}
    >
      <S.Title>Seja bem-vindo(a)</S.Title>
      <S.Subtitle>
        Dermatologia clínica e Estética além de Tratamentos Capilares
        <br />
      </S.Subtitle>
      <S.Disclaimer>
        Testes Alérgicos para tratamento de asma, Rinite e Dermatite atópica
        como Prick teste e Teste de contato para diagnóstico de alergias como
        urticárias além de Imunoterapia Alergeno Específica.
      </S.Disclaimer>
    </S.Container>
  )
}

export default Welcome
