import { HistoryItem } from '../types/history'

export const historyDataMockup: HistoryItem[] = [
   {
      id: 0,
      date: new Date(2021, 0, 20),
      title: 'Minha Transação',
      value: 1500,
      category: 'salary' 
   },
   {
      id: 1,
      date: new Date(2021, 0, 20),
      title: 'Minha Transação',
      value: 1500,
      category: 'salary' 
   },
   {
      id: 2,
      date: new Date(2021, 0, 20),
      title: 'Minha Transação',
      value: 1500,
      category: 'salary' 
   },
   {
      id: 3,
      date: new Date(2021, 0, 20),
      title: 'Minha Transação',
      value: 1500,
      category: 'salary' 
   },
   {
      id: 4,
      date: new Date(2021, 0, 20),
      title: 'Minha Transação',
      value: 1500,
      category: 'salary' 
   },
   {
      id: 5,
      date: new Date(2021, 1, 20),
      title: 'Minha Transação',
      value: 1500,
      category: 'salary' 
   },
   {
      id: 6,
      date: new Date(2021, 1, 20),
      title: 'Minha Transação',
      value: 1500,
      category: 'salary' 
   },
   {
      id: 7,
      date: new Date(2021, 1, 20),
      title: 'Minha Transação',
      value: 1500,
      category: 'food' 
   },
   {
      id: 8,
      date: new Date(2021, 2, 20),
      title: 'Minha Transação',
      value: 1500,
      category: 'food' 
   },
   {
      id: 9,
      date: new Date(2021, 2, 20),
      title: 'Minha Transação',
      value: 1500,
      category: 'food' 
   },
   {
      id: 10,
      date: new Date(2021, 4, 20),
      title: 'Minha Transação',
      value: 1500,
      category: 'food' 
   },
   {
      id: 11,
      date: new Date(2021, 9, 20),
      title: 'Minha Transação',
      value: 1500,
      category: 'food' 
   },
   {
      id: 12,
      date: new Date(2021, 9, 20),
      title: 'Minha Transação',
      value: 1500,
      category: 'food' 
   },
   {
      id: 13,
      date: new Date(2021, 9, 20),
      title: 'Minha Transação',
      value: 1500,
      category: 'salary' 
   },
]

if(!localStorage.getItem('HISTORY_LIST')) {
   localStorage.setItem('HISTORY_LIST', JSON.stringify(historyDataMockup))
}