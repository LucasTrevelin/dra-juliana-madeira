import React from 'react'

import { Container, StyledVideo } from './IntroVideo.styled'

const IntroVideo: React.FC = () => {
  return (
    <Container>
      <StyledVideo loop muted autoPlay>
        <source src='assets/intro_video.mp4' type='video/mp4' />
      </StyledVideo>
      Seu navegador não suporta o elemento de vídeo.
    </Container>
  )
}

export default IntroVideo
