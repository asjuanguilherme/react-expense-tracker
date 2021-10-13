import * as S from './styles'

interface Props {
   children: any;
}

const Container = ({children}: Props) => {
   return (
      <S.Container>
         { children }
      </S.Container>
   )
}

export default Container
