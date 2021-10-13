import { useState } from 'react'
import * as S from './styles'

import Container from '../../components/Base/Container'
import Header from '../../components/Layout/Header'
import Page from '../../components/Layout/Page'
import Board from '../../components/Board'
import History from '../../components/History'
import Section from '../../components/Layout/Section'

//Mockup
import { historyDataMockup } from '../../data/history'

const Home = () => {
   const [data, setData] = useState( historyDataMockup )
   const [filteredData, setFilteredData] = useState()

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

            <Section paddingTop={ 3 } paddingBottom={ 3 }>
               <History data={ data } />
            </Section>
         </Container>
      </Page>
   )
}

export default Home
