import styled, { css } from 'styled-components'
import { TSpecialLinksProps } from './Link.types'
import { devices } from '../../../helpers/breakpoints.helpers'

const specialLinkContainer = css<TSpecialLinksProps>`
  box-shadow: ${({ $variant }) =>
    $variant &&
    $variant !== 'hamburguer-highlight' &&
    $variant !== 'hamburguer' &&
    '0 8px 16px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1)'};
  border-radius: ${({ $variant }) =>
    $variant && $variant !== 'hamburguer' && '1.875rem'};

  padding: ${({ $variant }) => {
    if (
      $variant &&
      $variant !== 'hamburguer-highlight' &&
      $variant !== 'hamburguer'
    )
      return '0.8rem 1.2rem'
  }};

  text-decoration: none;
  margin: ${({ $variant }) => $variant && '0 0.8rem'};
  &:hover {
    text-decoration: none;
  }
  & > a {
    color: ${({ $variant, theme }) => {
      if ($variant === 'hamburguer') return theme.colors.primary
      return theme.colors.white
    }};

    border-bottom: ${({ $variant, theme }) => {
      if ($variant === 'hamburguer-highlight')
        return `2px solid ${theme.colors.black}`
      return theme.colors.white
    }};

    &:hover {
      text-decoration-color: white;
    }
  }
`

export const LinkContainer = styled.div<TSpecialLinksProps>`
  ${specialLinkContainer}
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  height: ${({ $variant }) => !$variant && '100%'};
  :hover {
    cursor: pointer;
  }
`

export const NavLink = styled.a<TSpecialLinksProps>`
  line-height: 20px;
  width: ${({ $variant }) =>
    ($variant === 'hamburguer' || $variant === 'hamburguer-highlight') &&
    '80%'};
  max-width: ${({ $variant }) => !$variant && '110px'};
  padding: ${({ $variant }) =>
    $variant === 'hamburguer' || $variant === 'hamburguer-highlight'
      ? '0.5rem'
      : '0 0.5rem'};

  scroll-behavior: smooth;
  color: ${({ theme }) => `1px solid ${theme.colors.white}`};

  text-decoration: none;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
    text-decoration-color: white;
  }

  @media screen and (${devices.headerBreak}) {
    font-size: 1rem;
  }
`
