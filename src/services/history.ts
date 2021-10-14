import { HistoryItem } from "../types/history"

export const getItems = ():HistoryItem[] => {
   const JSONData = localStorage.getItem('HISTORY_LIST') || ''

   return JSON.parse(JSONData)
}

export const insertItem = ( date: string, categorySlug: string, title: string, value: number ) => {
   const historyList = getItems()

   historyList.push({
      id: historyList.length,
      date: date,
      category: categorySlug,
      title: title,
      value: value
   })

   const JSONData = JSON.stringify(historyList)
   localStorage.setItem('HISTORY_LIST', JSONData)
}