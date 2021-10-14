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

export const getExtenseDate = (date: Date) => {
   const day = date.getDate()
   const month = date.getMonth()
   const year = date.getFullYear()

   return `${day} de ${getExtenseMonth(month)} de ${year}`
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

console.log(getTodayDate())