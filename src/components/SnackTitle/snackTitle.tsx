import { ReactNode } from 'react'
import { Title } from './snackTitleStyles'

interface TitleProps {
  children: ReactNode
}

export function SnackTitle({ children }: TitleProps) {
  return <Title>{children}</Title>
}
