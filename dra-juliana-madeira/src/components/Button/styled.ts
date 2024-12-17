import styled, { CSSProperties } from 'styled-components'

export const StyledButton = styled.button<{
  $background?: CSSProperties['background']
}>`
  background-color: ${({ $background }) => $background};
  display: flex;
  justify-content: center;
  align-items: center;
`
