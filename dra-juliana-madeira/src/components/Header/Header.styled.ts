import styled, { css } from 'styled-components'
import { devices } from '../../helpers/breakpoints.helpers'

const glassEffect = css`
  background: ${({ theme }) => theme.colors.quaternary60};
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: ${({ theme }) => `1px solid ${theme.colors.quaternary60}`};
`

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
`

export const Container = styled.header`
  width: 100%;
  overflow-x: hidden;
  height: 5.25rem;
  ${glassEffect}
  position: sticky;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  z-index: 30;
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
  padding: 1rem;
`

export const ImageContainer = styled.div`
  height: 100%;
  width: 100%;
  flex: 1;
  margin-left: 1rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  @media screen and (${devices.sm}) {
    justify-content: space-between;
  }
`

export const Image = styled.img`
  aspect-ratio: 8.83/1;
  width: 468px;
  margin-left: 2rem;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
`

export const SmallScreenImage = styled.img`
  aspect-ratio: 1.18/1;
  width: 30px;
  display: none;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  @media screen and (${devices.sm}) {
    display: flex;
  }
  :hover {
    transition: all 0.3s ease-in-out;
    text-decoration: underline;
  }
`
