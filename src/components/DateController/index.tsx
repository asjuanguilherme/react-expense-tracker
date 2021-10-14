import * as S from './styles'
import { getExtenseMonth } from '../../helpers/date'

interface Props {
   dateController: [Date, Function];
}

const index = ({ dateController }: Props) => {
   
   const [date, changeDate] = dateController
   const day = date.getDate()
   const month = date.getMonth()
   const year = date.getFullYear()

   const updateDate = ( action: 'inc' | 'dec' ) => {
      if(action === 'inc') changeDate(new Date(year, month+1, day))
      if(action === 'dec') changeDate(new Date(year, month-1, day))
   }

   return (
      <S.Wrapper>
         <S.PrevButton onClick={ () => updateDate('dec') } />
         <S.DateTitle>{ getExtenseMonth(month) } de {year}</S.DateTitle>
         <S.NextButton onClick={ () => updateDate('inc') } />
      </S.Wrapper>
   )
}

export default index
