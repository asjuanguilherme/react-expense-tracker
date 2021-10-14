export const splitDate = ( date: string ) :number[] => date.split('-').map( a => Number(a))

export const getObjectDate = (date: string) : Date => {
   const [year, month, day] = splitDate(date)

   return new Date(year, month-1, day)
}

export const getExtenseMonth = (month: number) => {
   const monthList = [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro'
   ]

   return monthList[month]
}

export const getExtenseDate = (date: string) => {
   const [year, month, day] = splitDate(date)

   return `${day} de ${getExtenseMonth(month-1)} de ${year}`
}

export const getCurrentMonth = () : number => {
   const now = new Date()
   return now.getMonth()
}

export const getTodayDate = (format: 'yyyy-mm-dd' | 'dd-mm-yyyy' = 'yyyy-mm-dd' ) :string => {
   const now = new Date()
   const day = now.getDate()
   const month = now.getMonth()+1
   const year = now.getFullYear()
   
   switch(format) {
      default:
         return`${year}-${month}-${day}`
      case 'dd-mm-yyyy':
         return`${day}-${month}-${year}`
   }
}