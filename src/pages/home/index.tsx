import * as S from './styles'
import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import Container from '../../components/Base/Container'
import Header from '../../components/Layout/Header'
import Page from '../../components/Layout/Page'
import Board from '../../components/Board'
import History from '../../components/History'
import Section from '../../components/Layout/Section'
import AddItem from '../../components/AddItem'

const Home = () => {
  const { date, setDate, income, expense, filteredData } =
    useContext(GlobalContext)
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
