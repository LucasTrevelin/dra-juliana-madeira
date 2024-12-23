import styled, { CSSProperties } from 'styled-components'

export const Container = styled.div`
  margin-top: 10rem;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
  display: flex;
  justify-content: space-between;
  padding: 1rem 3rem;
  align-items: flex-start;
`

export const ImageFrame = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Image = styled.img`
  width: 338px;
`

export const SocialNetworkContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
`

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.secondary};
  margin: 0;
`

export const ButtonsContainer = styled.div`
  aspect-ratio: 2.6/1;
  width: 200px;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.primary};
  border: 1px solid #ffffff;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Button = styled.button<{ $orientation: 'left' | 'right' }>`
  width: 50%;
  border: 1px solid #ffffff;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ $orientation }) =>
    $orientation === 'left' ? '50px 0 0 50px' : '0 50px 50px 0'};
  height: 100%;
  aspect-ratio: 4.8/1;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
  &:hover {
    filter: brightness(110%);
    cursor: pointer;
    transition: all 0.25s ease-in-out;
  }
`
export const IconButton = styled.img<{ $width: CSSProperties['width'] }>`
  aspect-ratio: 1;
  width: ${({ $width }) => $width};
  z-index: 2;
`
