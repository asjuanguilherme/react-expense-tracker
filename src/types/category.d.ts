export interface Category {
   [tag: string]: {
      name: string;
      type: 'income' | 'expense';
      color: string;
   }
}