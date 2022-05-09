import { ReactComponentElement } from 'react'
import * as S from './styles'

interface Props {
  label: string
  onClick?: VoidFunction
  icon?: ReactComponentElement<any>
  variant?: string
  href?: string
  target?: string
}

const Button = ({
  label,
  onClick,
  icon,
  variant = 'primary',
  href,
  target
}: Props) => {
  return (
    <S.Wrapper onClick={onClick} variant={variant}>
      <a href={href} target={target}>
        {label}
        {icon}
      </a>
    </S.Wrapper>
  )
}

export default Button
