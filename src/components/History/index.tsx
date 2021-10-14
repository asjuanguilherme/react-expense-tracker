import * as S from './styles'
import * as T from '../../types/history'

import HistoryItem from './HistoryItem/index'

interface Props {
   data: T.HistoryItem[];
}

const History = ( props: Props ) => {
   
   const renderHistoryList = () => (
      props.data.map( item => (
         <HistoryItem
            key={ item.id }
            id={ item.id }
            date={ item.date }
            title={ item.title }
            value={ item.value }
            category={ item.category }
         />
         )
      )
   )
   
   return (
      <S.HistoryList>
         { renderHistoryList() }
      </S.HistoryList>
   )
}

export default History
