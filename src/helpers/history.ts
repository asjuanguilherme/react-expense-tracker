import { HistoryItem } from '../types/history'
import { getObjectDate } from './date'

export const filterHistoryByMonth = ( historyList: HistoryItem[], date: Date ) : HistoryItem[] => {

   return historyList.filter( historyItem => {
      const itemDate = getObjectDate(historyItem.date)

      return(
         itemDate.getFullYear() === date.getFullYear() &&
         itemDate.getMonth() === date.getMonth()
      )
   })
}