import React from 'react'

import * as S from './About.styled'

const About: React.FC = () => {
  return (
    <S.Container id='Sobre a Dra. Juliana Madeira'>
      <S.InfoContainer>
        <S.ContentContainer>
          <S.Title>Dra Jualiana Madeira</S.Title>
          <S.Subtitle>CRM-RJ XXXXXX - RQE XXXXX</S.Subtitle>
        </S.ContentContainer>
        <S.ContentContainer>
          <S.Text>
            Sou Dra Juliana, médica desde 2006 formação UNESA, Pós -Graduada em
            Dermatologia AFYA , Pos- Graduada em Alergia e Imunologia UNIRIO ,
            Residência Médica em Pediatria Geral no Hospital dos Servidores do
            Estado do Rio de Janeiro. <br />
            <br />
            Atendo todas as Idades em -Dermatologia Clínica e Estética
            -Tricologia -Alergia e Imunologia.
            <br />
            <br />
            Consultório equipado com tecnologias como Ultraformer MPT Facial e
            corporal, Laser Lavieen Dermatológico e Capilar,Ledterapia Capilar,
            Microagulhamento para com PDRN E EXOSSOMOS dermatológico e capilar
            Além de ter procedimentos como Botox, Bioestimuladores faciais e
            corporais, Preenchedores faciais e corporais a base de ácido
            Hialurônico etc.
            <br />
            <br />
            Dermatologia clínica e Estética além de Tratamentos Capilares
            individualizados.
            <br />
            <br />
            Testes Alérgicos para tratamento de asma, Rinite e Dermatite atópica
            como Prick teste e Teste de contato para diagnóstico de alergias
            como urticárias além de Imunoterapia Alergeno Específica.
          </S.Text>
        </S.ContentContainer>
      </S.InfoContainer>
      <S.Image src='src/assets/sobre.png' alt='photo-dra-juliana' />
    </S.Container>
  )
}

export default About
