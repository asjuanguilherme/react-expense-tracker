import { useState, useEffect } from 'react'
import * as S from './styles'

import Container from '../../components/Base/Container'
import Header from '../../components/Layout/Header'
import Page from '../../components/Layout/Page'
import Board from '../../components/Board'
import History from '../../components/History'
import Section from '../../components/Layout/Section'

//Mockup
import { historyDataMockup } from '../../data/history'
import { getTotalExpense, getTotalIncome } from '../../helpers/values'

const Home = () => {
   const [data, setData] = useState( historyDataMockup )
   const [income, setIncome] = useState(getTotalIncome(data))
   const [expense, setExpense] = useState(getTotalExpense(data))
   const [filteredData, setFilteredData] = useState()

   useEffect(() => {
      setIncome(getTotalIncome(data))
      setExpense(getTotalExpense(data))
   }, [data])

   return (
      <Page>
         <Container>
            <Header />

            <Section paddingTop={ 3 }>
               <S.Dashboard>
                  <Board title="Balanço Geral" value={ income - expense } />
                  <Board title="Despesas" value={ expense } />
                  <Board title="Receita" value={ income } />
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
