import styled, { css } from 'styled-components'
import { TSpecialLinksProps } from './Link.types'

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
  & > a {
    color: ${({ $variant, theme }) => {
      if ($variant === 'hamburguer') return theme.colors.primary
    }};
    text-decoration: none;

    border-bottom: ${({ $variant, theme }) =>
      $variant === 'hamburguer-highlight' && `2px solid ${theme.colors.black}`};

    &:hover {
      text-decoration: none;
    }
  }
`

export const LinkContainer = styled.div<TSpecialLinksProps>`
  ${specialLinkContainer}
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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
  color: inherit;
  text-decoration: none;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
    text-decoration-color: white;
  }
`
