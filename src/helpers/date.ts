const getExtenseMonth = (month: number) => {
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