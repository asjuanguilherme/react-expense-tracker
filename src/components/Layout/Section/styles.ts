import styled from 'styled-components'
import * as T from './types'

export const Section = styled.section<T.Section>`
   padding-top: ${ ({ paddingTop }) => paddingTop? paddingTop * 1 : 0 }rem;
   padding-bottom: ${ ({ paddingBottom }) => paddingBottom? paddingBottom * 1 : 0 }rem;
`