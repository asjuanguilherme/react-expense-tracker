import * as S from './styles'
import * as T from './types'

const Section = ( props: T.Section ) => {
   return (
      <S.Section paddingBottom={ props.paddingBottom } paddingTop={ props.paddingTop }>
         { props.children }
      </S.Section>
   )
}

export default Section
