import styled, { css } from 'styled-components'
import { devices } from '../../helpers/breakpoints.helpers'

const glassEffect = css`
  background: ${({ theme }) => theme.colors.backgroundPrimary60};
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: ${({ theme }) => `1px solid ${theme.colors.backgroundPrimary60}`};
`

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
`

export const Container = styled.header`
  top: 0;
  width: 100%;
  height: 5.5rem;
  ${glassEffect}
  position: -webkit-sticky; /* For Safari */
  position: sticky;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 30;
  @media screen and (${devices.sm}) {
    height: 4rem;
  }
`

export const ImageContainer = styled.div`
  height: 100%;
  width: 100%;
  flex: 1;
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
  height: 100%;
  aspect-ratio: 3.98/1;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);

  @media screen and (${devices.headerSmBreak}) {
    width: 250px;
    margin-left: 1.5rem;
  }
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
