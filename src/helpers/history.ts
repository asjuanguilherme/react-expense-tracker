import { HistoryItem } from '../types/history'

export const filterHistoryByMonth = ( historyList: HistoryItem[], date: Date ) : HistoryItem[] => {
   
   return historyList.filter( historyItem => (
      historyItem.date.getFullYear() === date.getFullYear() &&
      historyItem.date.getMonth() === date.getMonth()
   ))
}