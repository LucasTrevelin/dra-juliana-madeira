import React, { ButtonHTMLAttributes, PropsWithChildren } from 'react'

import { StyledButton } from './styled'
import { CSSProperties } from 'styled-components'

interface IButtonProps
  extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {
  background: CSSProperties['background']
}

const Button: React.FC<IButtonProps> = ({
  children,
  background,
  ...buttonProps
}) => {
  return (
    <StyledButton $background={background} {...buttonProps}>
      {children}
    </StyledButton>
  )
}

export default Button
