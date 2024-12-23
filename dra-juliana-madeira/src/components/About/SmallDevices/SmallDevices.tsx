import React, { useRef } from 'react'

import * as S from '../About.styled'

const SmallDevices: React.FC = () => {
  const scrollRef = useRef(null)
  return (
    <S.SmallDevicesContainer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ root: scrollRef, once: true }}
      transition={{ ease: 'linear', delay: 0.6 }}
      id='Sobre a Dra. Juliana Madeira'
    >
      <S.InfoContainer>
        <S.ContentContainer>
          <S.Title>Dra Juliana Madeira</S.Title>
          <S.Subtitle>CRM-RJ 814105 - RQE XXXXX</S.Subtitle>
        </S.ContentContainer>
        <S.Image src='assets/sobre.png' alt='photo-dra-juliana' />
        <S.ContentContainer>
          <S.Text>
            Sou Dra Juliana, médica desde 2006 formação UNESA, Pós -Graduada em
            Dermatologia AFYA , Pos- Graduada em Alergia e Imunologia UNIRIO ,
            Residência Médica em Pediatria Geral no Hospital dos Servidores do
            Estado do Rio de Janeiro. <br />
            <br />
            Meu consultório é equipado com tecnologias como Ultraformer MPT
            Facial e corporal, Laser Lavieen Dermatológico e Capilar, Ledterapia
            Capilar, Microagulhamento para com PDRN E EXOSSOMOS dermatológico e
            capilar Além de ter procedimentos como Botox, Bioestimuladores
            faciais e corporais, Preenchedores faciais e corporais a base de
            ácido Hialurônico etc.
            <br />
            <br />
            Atendo todas as Idades em
            <ul>
              <li>Dermatologia Clínica e Estética</li>
              <li>Tricologia</li> <li>Alergia e Imunologia.</li>
            </ul>
          </S.Text>
        </S.ContentContainer>
      </S.InfoContainer>
    </S.SmallDevicesContainer>
  )
}

export default SmallDevices
