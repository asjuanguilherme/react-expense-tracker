import * as S from './styles'
import DateController from '../../DateController'

interface Props {
  dateController: [Date, Function]
}

const Header = ({ dateController }: Props) => {
  return (
    <S.Header>
      <S.Title>Controle Financeiro</S.Title>

      <DateController dateController={[...dateController]} />
    </S.Header>
  )
}

export default Header
