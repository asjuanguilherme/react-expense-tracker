import { Category } from "../types/category" 

export const categoriesDataMockup: Category = {
   food: {
      name: 'Alimentação',
      type: 'expense',
      color: 'orangered',
   },
   salary: {
      name: 'Salário',
      type: 'income',
      color: '#27C26E',
   },
   others: {
      name: 'Outros',
      type: 'expense',
      color: 'red',
   }
}