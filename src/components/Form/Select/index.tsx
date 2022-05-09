import * as S from './styles'
import { FaExclamationCircle } from 'react-icons/fa'
import { ChangeEventHandler, FocusEventHandler } from 'react'

type Option = {
  value: string
  name: string
}

interface Props {
  label: string
  id: string
  error: string | null
  value: string
  onChange: ChangeEventHandler
  onBlur: FocusEventHandler
  options: Option[]
}

const Select = ({
  label,
  id,
  error = null,
  onChange,
  onBlur,
  options
}: Props) => {
  const renderOptions = () =>
    options.map((option, index) => (
      <S.Option value={option.value}>{option.name}</S.Option>
    ))

  return (
    <S.Wrapper>
      {label && <S.Label htmlFor={id}> {label} </S.Label>}

      <S.Select error={error} onBlur={onBlur} onChange={onChange}>
        <S.Option value="" selected disabled>
          {label}
        </S.Option>
        {renderOptions()}
      </S.Select>

      {error && (
        <S.Error>
          <FaExclamationCircle />
          {error}
        </S.Error>
      )}
    </S.Wrapper>
  )
}

export default Select
