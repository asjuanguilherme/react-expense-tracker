import { useState, useEffect } from 'react'
import * as S from './styles'

import Container from '../../components/Base/Container'
import Header from '../../components/Layout/Header'
import Page from '../../components/Layout/Page'
import Board from '../../components/Board'
import History from '../../components/History'
import Section from '../../components/Layout/Section'

import { historyDataMockup } from '../../data/history'
import * as history from '../../services/history'

import { getTotalExpense, getTotalIncome } from '../../helpers/values'
import { filterHistoryByMonth } from '../../helpers/history'
import AddItem from '../../components/AddItem'

const Home = () => {
  const [data, setData] = useState(history.getItems())
  const [income, setIncome] = useState(getTotalIncome(data))
  const [expense, setExpense] = useState(getTotalExpense(data))
  const [date, setDate] = useState(new Date())
  const [filteredData, setFilteredData] = useState(
    filterHistoryByMonth(data, date)
  )

  useEffect(() => {
    setFilteredData(filterHistoryByMonth(data, date))
  }, [date])

  useEffect(() => {
    setIncome(getTotalIncome(filteredData))
    setExpense(getTotalExpense(filteredData))
  }, [filteredData])

  useEffect(() => {
    console.log(data)
  }, [])

  return (
    <Page>
      <Container>
        <Header dateController={[date, setDate]} />

        <Section paddingTop={3}>
          <S.Dashboard>
            <Board title="Balanço Geral" value={income - expense} />
            <Board title="Despesas" value={expense} />
            <Board title="Receita" value={income} />
          </S.Dashboard>
        </Section>

        <Section paddingTop={3}>
          <AddItem />
        </Section>

        <Section paddingTop={1.5} paddingBottom={3}>
          <History data={filteredData} />
        </Section>
      </Container>
    </Page>
  )
}

export default Home
