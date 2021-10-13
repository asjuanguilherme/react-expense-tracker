import { HistoryItem } from '../types/history'
import { categoriesDataMockup } from '../data/categories'

export const formatValue = (value: number):string => value.toFixed(2).replace('.', ',')

export const getTotalIncome = ( historyList: HistoryItem[] ) => {
   let totalIncome = 0
   
   for( let i in historyList ) {
      if( categoriesDataMockup[historyList[i].category].type === 'income' ) { 
         totalIncome += historyList[i].value
      }
   }

   return totalIncome
}

export const getTotalExpense = ( historyList: HistoryItem[] ) => {
   let totalExpense = 0
   
   for( let i in historyList ) {
      if( categoriesDataMockup[historyList[i].category].type === 'expense' ) { 
         totalExpense += historyList[i].value
      }
   }

   return totalExpense
}