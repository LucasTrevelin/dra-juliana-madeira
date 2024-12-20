import { ButtonHTMLAttributes, ReactNode } from 'react'
import { CSSProperties } from 'styled-components'

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean
  disabled?: boolean
  children: ReactNode
  variant: TButtonVariants['$variant']
  iconTheme?: TButtonVariants['$iconTheme']
  width?: TButtonVariants['$width']
  backgroundColor?: TButtonVariants['$backgroundColor']
  margin?: TButtonVariants['$margin']
}

export type TButtonVariants = {
  $variant: 'socialMedia' | 'help' | 'shortIcons'
  $iconTheme?: 'whatsapp' | 'instagram'
  $isHidden?: boolean
  $width?: string
  $backgroundColor?: CSSProperties['backgroundColor']
  $margin?: CSSProperties['margin']
}
