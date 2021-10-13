import * as S from './styles'
import { HistoryItem } from '../../../types/history'
import { getExtenseDate } from '../../../helpers/date'
import { formatValue } from '../../../helpers/values'
import { categoriesDataMockup } from '../../../data/categories'

const index = ( props: HistoryItem ) => {
   return (
      <S.Wrapper>
         <S.Date>
            { getExtenseDate(props.date) }
         </S.Date>

         <S.Title>
            { props.title }
         </S.Title>

         <S.Category color={ categoriesDataMockup[props.category].color } >
            <span>
               { categoriesDataMockup[props.category].name }
            </span>
         </S.Category>

         <S.Value type={ categoriesDataMockup[props.category].type } >
            R$ { formatValue(props.value) }
         </S.Value>
         <S.RemoveItem />
      </S.Wrapper>
   )
}

export default index
