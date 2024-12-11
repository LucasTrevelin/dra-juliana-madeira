import { createGlobalStyle } from 'styled-components'
import { devices } from './helpers/breakpoints.helpers'

export default createGlobalStyle`

:root {
  font-family: "Comfortaa", sans-serif, system-ui, Avenir, Helvetica, Arial, sans-serif;
}

#root {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 100%;
  max-width: 100vw;
  margin: 0;
  padding: 0;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black}
}

html,
body {
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
  width: 100%;
  min-width: 100%;
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;

  h1{
    font-size: 2.5rem;

    @media screen and (${devices.sm}){
      font-size: 1.25rem;
    }
  }
}`

//Global colors
export const theme = {
  colors: {
    primary: '#D5BF8E',
    secundary: '#8F8B8A',
    greenLighter: '#AED7C3',
    greenLight: '#98FB98',
    greenWhatsApp: '#27D366',
    background: '#FFFFFF',
    backgroundDarker: '#090F36',
    backgroundPoem: '#3D65A1',
    yellowLight: '#F1DE74',
    yellowMustard: '#FFD700',
    cardBackground: '#F3F7F9',
    greyWhite: '#F3F7F9',
    orangeLighter: '#FFA265',
    orangeLight: '#FFA07A',
    white: '#FFFFFF',
    black: '#000000',
    gray: '#999999',
    grayHighlight: '#333333',
    grayFill: '#C8BDB6',
    cardGradient: 'linear-gradient(270deg, #2C3E50 0%, #4d6d8c 100%)',
    imageFilter: '#507DC0'
  }
}
