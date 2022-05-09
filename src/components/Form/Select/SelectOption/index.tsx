import * as S from './styles'

export interface Props {
  name: string
  value: string
}

const SelectOption = ({ name, value }: Props) => {
  return <S.Option value={value}>{name}</S.Option>
}

export default SelectOption
