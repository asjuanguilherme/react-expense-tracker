import { createContext, ReactNode, useState, useEffect } from 'react'
import { getItems } from '../services/history'
import { filterHistoryByMonth } from '../helpers/history'
import { getTotalIncome, getTotalExpense } from '../helpers/values'
import { HistoryItem } from '../types/history'

type GlobalContextType = {
  data: HistoryItem[]
  setData: (data: HistoryItem[]) => void
  income: number
  setIncome: (income: number) => void
  expense: number
  setExpense: (expense: number) => void
  date: Date
  setDate: (date: Date) => void
  filteredData: HistoryItem[]
  setFilteredData: (data: HistoryItem[]) => void
}

export const GlobalContext = createContext<GlobalContextType>(
  {} as GlobalContextType
)

const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<HistoryItem[]>([])
  const [date, setDate] = useState(new Date())
  const [filteredData, setFilteredData] = useState(
    filterHistoryByMonth(data, date)
  )
  const [income, setIncome] = useState<number>(0)
  const [expense, setExpense] = useState<number>(0)

  useEffect(() => {
    setData(getItems())
  }, [])

  useEffect(() => {
    setFilteredData(filterHistoryByMonth(data, date))
  }, [date, data])

  useEffect(() => {
    setIncome(getTotalIncome(filteredData))
    setExpense(getTotalExpense(filteredData))
  }, [filteredData])

  return (
    <GlobalContext.Provider
      value={{
        data,
        setData,
        date,
        setDate,
        filteredData,
        setFilteredData,
        income,
        setIncome,
        expense,
        setExpense
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalProvider
