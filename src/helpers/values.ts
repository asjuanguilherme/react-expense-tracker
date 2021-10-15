import { HistoryItem } from '../types/history'
import { categoriesDataMockup } from '../data/categories'
import { Category } from '../types/category'

export const formatValue = (value: number):string => value.toFixed(2).replace('.', ',')

export const getNumberValue = (value: string) :number => parseFloat(value.replace(',','.'))

export const getTotalIncome = ( historyList: HistoryItem[] ) => {
   let totalIncome = 0
   
   for( let i in historyList ) {
      const category: Category = categoriesDataMockup.filter( cat => cat.slug === historyList[i].category )[0]

      if( category.type === 'income' ) { 
         totalIncome += historyList[i].value
      }
   }

   return totalIncome
}

export const getTotalExpense = ( historyList: HistoryItem[] ) => {
   let totalExpense = 0
   
   for( let i in historyList ) {
      const category: Category = categoriesDataMockup.filter( cat => cat.slug === historyList[i].category )[0]

      if( category.type === 'expense' ) { 
         totalExpense += historyList[i].value
      }
   }


   return totalExpense
}