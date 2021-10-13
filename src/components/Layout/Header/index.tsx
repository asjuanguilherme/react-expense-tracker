import * as S from './styles'
import DateController from '../../DateController'

const Header = () => {
   return (
      <S.Header>
         <S.Title>
            Controle Financeiro
         </S.Title>

         <DateController />
      </S.Header>
   )
}

export default Header
