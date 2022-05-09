import { HistoryItem } from '../types/history'

export const getItems = (): HistoryItem[] => {
  const JSONData = localStorage.getItem('HISTORY_LIST')

  if (!JSONData) return []

  return JSON.parse(JSONData)
}

export const insertItem = (data: HistoryItem) => {
  const historyList = getItems()

  historyList.push({
    ...data,
    id: historyList.length
  })

  const JSONData = JSON.stringify(historyList)
  localStorage.setItem('HISTORY_LIST', JSONData)
}
