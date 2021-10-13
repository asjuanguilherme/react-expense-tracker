import * as S from './styles'
import { formatValue } from '../../helpers/values'

interface Board {
   title: string;
   value: number;
   status?: 'positive' | 'negative' | 'neutral';
   statusValue?: number | string;
}

const Board = ( props: Board ) => {
   return (
      <S.Board>
         <S.Title>{ props.title }</S.Title>
         <S.Value>{ formatValue(props.value) }</S.Value>
         <S.Status status={ props.status || 'neutral'}>
            { props.statusValue }
         </S.Status>
      </S.Board>
   )
}

export default Board
