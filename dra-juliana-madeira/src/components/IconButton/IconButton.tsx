import { TIconButtonProps } from './IconButton.types'
import { iconMapper } from './IconButton.constants'
import { Link } from './IconButton.styled'
import { encodedHelpMessage } from '../../helpers/constants'
import Button from '../Button/Button'

export const IconButton: React.FC<TIconButtonProps> = ({ variant }) => {
  return (
    <Link
      target='_blank'
      href={
        variant === 'whatsapp'
          ? `https://wa.me/+5521976162422?text=${encodedHelpMessage}`
          : 'https://www.instagram.com/drajulianamadeiraferreira?igsh=MXN3dXBkMjg0OWswZw=='
      }
    >
      <Button variant='shortIcons' iconTheme={variant}>
        <img src={iconMapper[variant]} alt={`${variant}-button-icon`} />
      </Button>
    </Link>
  )
}
