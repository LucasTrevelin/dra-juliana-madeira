import styled from 'styled-components'
import { devices } from '../../../helpers/breakpoints.helpers'

export const Container = styled.button`
  outline: none;
  border: 0;
  width: fit-content;
  background-color: inherit;
  display: none;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1.18/1;
  position: relative;
  right: 2rem;

  @media screen and (${devices.sm}) {
    display: flex;
  }
`

export const Image = styled.img`
  aspect-ratio: 1.18/1;
  width: 30px;
  display: none;
  border-radius: 3px;
  @media screen and (${devices.sm}) {
    display: flex;
  }
  :hover {
    transition: all 0.3s ease-in-out;
    text-decoration: underline;
  }
`
