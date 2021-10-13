import * as S from './styles'

import Container from '../../components/Base/Container'
import Header from '../../components/Layout/Header'
import Page from '../../components/Layout/Page'
import Board from '../../components/Board'
import Section from '../../components/Layout/Section'

const index = () => {
   return (
      <Page>
         <Container>
            <Header />

            <Section paddingTop={ 3 }>
               <S.Dashboard>
                  <Board title="Balanço Geral" value={ 954.32 } status={ 'positive' } statusValue="+2,36%" />
                  <Board title="Despesas" value={ 245.85 } status={ 'negative' } statusValue="+2,36%" />
                  <Board title="Receita" value={ 1587.2 } status={ 'positive' } statusValue="+2,36%" />
               </S.Dashboard>
            </Section>

            <Section paddingTop={ 3 }>
               
            </Section>
         </Container>
      </Page>
   )
}

export default index
