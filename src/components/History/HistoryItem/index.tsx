import * as S from './styles'
import { HistoryItem } from '../../../types/history'
import { getExtenseDate } from '../../../helpers/date'
import { formatValue } from '../../../helpers/values'
import { categoriesDataMockup } from '../../../data/categories'

const index = ( props: HistoryItem ) => {
   
   const category = categoriesDataMockup.filter( category => category.slug === props.category)[0]

   return (
      <S.Wrapper>
         <S.Date>
            { getExtenseDate(props.date) }
         </S.Date>

         <S.Title>
            { props.title }
         </S.Title>

         <S.Category color={ category.color } >
            <span>
               { category }
            </span>
         </S.Category>

         <S.Value type={ category.type } >
            R$ { formatValue(props.value) }
         </S.Value>
         
         <S.RemoveItem />
      </S.Wrapper>
   )
}

export default index
