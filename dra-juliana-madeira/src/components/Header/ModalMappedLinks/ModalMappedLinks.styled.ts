import styled from 'styled-components'
import { motion } from 'framer-motion'
import { devices } from '../../../helpers/breakpoints.helpers'

export const LinksWrapper = styled(motion.dialog)`
  && {
    padding: 0.8rem 0;
  }
  width: 100%;
  height: 100%;
  display: none;
  flex-direction: column;
  align-items: center;
  margin: 0;
  position: fixed;
  text-align: center;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.background};
  z-index: 99;
  border-radius: 10px;
  border: 0;
  outline: 0;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  @media screen and (${devices.sm}) {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    row-gap: 0.5rem;
    padding: 2rem 2rem 0 2rem;
  }
`

export const CloseContainer = styled.div`
  display: none;

  @media screen and (${devices.sm}) {
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    width: 100%;
    padding-left: 2rem;
    margin-bottom: 2rem;
  }
`

export const Button = styled.button`
  display: none;
  background-color: inherit;
  outline: none;
  border-radius: 50%;
  border: 0;
  padding-left: 0;
  color: ${({ theme }) => theme.colors.white};
  @media screen and (${devices.sm}) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
