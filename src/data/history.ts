import { HistoryItem } from '../types/history'
import { insertItem } from '../services/history'

export const historyDataMockup: HistoryItem[] = [
   {
      id: 0,
      date: '2021-10-13',
      title: 'Salario do Emprego',
      value: 1500.78,
      category: 'salary' 
   },
   {
      id: 1,
      date: '2021-10-13',
      title: 'IFood',
      value: 53.53,
      category: 'food' 
   },
   {
      id: 2,
      date: '2021-10-13',
      title: 'Extrazinho',
      value: 785.50,
      category: 'salary' 
   },
   {
      id: 3,
      date: '2021-10-13',
      title: 'Pizza',
      value: 88.70,
      category: 'food' 
   },
   {
      id: 4,
      date: '2021-11-14',
      title: 'Extrazinho',
      value: 565.50,
      category: 'salary' 
   },
   {
      id: 5,
      date: '2021-11-14',
      title: 'Pizza',
      value: 88.70,
      category: 'food' 
   },
]


if(!localStorage.getItem('HISTORY_LIST')) {
   localStorage.setItem('HISTORY_LIST', JSON.stringify(historyDataMockup))
}