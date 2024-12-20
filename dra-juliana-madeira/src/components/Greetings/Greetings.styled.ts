import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Greetings = styled.h1`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.secondary};
`

export const GreetingsContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  column-gap: 10rem;
`

export const IntroContent = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: min-content;
  padding: 1.5rem;
`

export const PortraitFrame = styled.img<{ $coordinate: 'up' | 'bottom' }>`
  position: absolute;
  top: ${({ $coordinate }) => $coordinate === 'up' && 0};
  left: ${({ $coordinate }) => $coordinate === 'up' && 0};
  bottom: ${({ $coordinate }) => $coordinate === 'bottom' && 0};
  right: ${({ $coordinate }) => $coordinate === 'bottom' && 0};
`

export const IntroFrame = styled.main`
  border-radius: 0 20px 0 20px;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  display: grid;
  row-gap: 1.5rem;
  height: 480px;
  aspect-ratio: 0.75/1;
`

export const FirstMessage = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.5rem;
  text-align: left;
  line-height: 2.5rem;
`

export const SecondMessage = styled.span`
  color: ${({ theme }) => theme.colors.redHighlight};
  font-size: 1.25rem;
  text-align: justify;
  line-height: 1.75rem;
  font-family: 'Open Sans', sans-serif;
`
export const CoverPhoto = styled.img`
  aspect-ratio: 0.79/1;
  height: 580px;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
`

export const ButtonContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 1rem;
`

export const IconFrame = styled.div`
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.greenWhatsApp};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
`

export const Icon = styled.img`
  width: 1.5rem;
`
