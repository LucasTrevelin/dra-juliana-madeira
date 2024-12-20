import { StyledButton } from './Button.styled'
import { IButtonProps } from './Button.types'

const Button: React.FC<IButtonProps> = ({
  children,
  variant,
  title,
  iconTheme,
  width,
  backgroundColor,
  margin
}) => {
  return (
    <StyledButton
      id={variant}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
      }}
      initial={variant === 'help' && 'hidden'}
      animate={variant === 'help' && 'visible'}
      transition={{ ease: 'linear', delay: 0.5 }}
      $variant={variant}
      $iconTheme={iconTheme}
      title={title}
      $width={width}
      $backgroundColor={backgroundColor}
      $margin={margin}
    >
      {children}
    </StyledButton>
  )
}

export default Button
