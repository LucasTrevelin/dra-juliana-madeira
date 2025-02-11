import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'
import { TButtonVariants } from './Button.types'
import { devices } from '../../helpers/breakpoints.helpers'

const mapperVariants = {
  socialMedia: css<TButtonVariants>`
    width: ${({ $width }) => $width || '15.625rem'};
    @media screen and (${devices.sm}) {
      width: 14rem;
    }
    height: 3.3rem;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.primary};
    border: ${({ theme }) => `1px solid ${theme.colors.greenWhatsApp}`};
    color: ${({ theme, $iconTheme }) => $iconTheme && theme.colors.white};
    margin: ${({ $margin }) => $margin || '0'};
  `,
  help: css<TButtonVariants>`
    position: fixed;
    bottom: 3.125rem;
    right: 3.125rem;
    width: ${({ $width }) => $width || '16rem'};
    padding: 0.5rem 0.25rem;
    background-color: ${({ theme }) => theme.colors.whatsappGreen};
    color: ${({ theme }) => theme.colors.white};
    z-index: 10;
  `,
  shortIcons: css<TButtonVariants>`
    aspect-ratio: 1/1;
    height: 4rem;
    background: ${({ theme, $iconTheme }) =>
      $iconTheme === 'whatsapp'
        ? theme.colors.whatsappGreen
        : theme.colors.instagramBackground};
    color: ${({ theme, $iconTheme }) => $iconTheme && theme.colors.white};
    outline: none;
    border: none;

    & > img {
      aspect-ratio: 1/1;
      width: 3rem;
    }
  `
}

export const StyledButton = styled(motion.button)<TButtonVariants>`
  ${({ $variant }) => mapperVariants[$variant]}
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  font-weight: 600;
  white-space: nowrap;
  outline: none;
  z-index: 5;
  aspect-ratio: 4.8/1;
  &:hover {
    filter: brightness(110%);
    cursor: pointer;
    transition: all 0.25s ease-in-out;
  }
`
