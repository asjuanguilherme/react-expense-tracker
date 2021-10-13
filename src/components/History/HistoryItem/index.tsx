import * as S from './styles'
import { HistoryItem } from '../../../types/history'
import { getExtenseDate } from '../../../helpers/date'
import { formatValue } from '../../../helpers/values'

const index = ( props: HistoryItem ) => {
   return (
      <S.Wrapper>
         <S.Date>
            { getExtenseDate(props.date) }
         </S.Date>
         <S.Title>
            { props.title }
         </S.Title>
         <S.Category>
            { props.category }
         </S.Category>
         <S.Value>
            R$ { formatValue(props.value) }
         </S.Value>
         <S.RemoveItem />
      </S.Wrapper>
   )
}

export default index
