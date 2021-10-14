import { Category } from "../types/category" 

export const categoriesDataMockup: Category[] = [
   {
      slug: 'food',
      name: 'Alimentação',
      type: 'expense',
      color: 'orangered',
   },
   {
      slug: 'salary',
      name: 'Salário',
      type: 'income',
      color: '#27C26E',
   },
   {
      slug: 'others',
      name: 'Outros',
      type: 'expense',
      color: 'red',
   }
]