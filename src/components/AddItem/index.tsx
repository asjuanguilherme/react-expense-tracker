import * as S from './styles'
import { useState, useEffect, FormEvent } from 'react'
import useForm from '../../hooks/useForm'
import Input from '../Form/Input'
import Select from '../Form/Select'
import { FaPlus } from 'react-icons/fa'

import Button from '../Button'
import { getTodayDate } from '../../helpers/date'
import { getNumberValue } from '../../helpers/values'
import * as history from '../../services/history'
import { categoriesDataMockup } from '../../data/categories'

const AddItem = () => {

   const date = useForm('date', 'Data', getTodayDate('yyyy-mm-dd'))
   const category = useForm('default', 'Categoria')
   const title = useForm('name', 'Titulo','Transação')
   const value = useForm('value', 'Valor', '0,00')

   const handleSubmit = ( e: FormEvent<HTMLFormElement> ) => {
      e.preventDefault()
      if( date.validate(), category.validate(), title.validate(), value.validate()) {
         history.insertItem(
            date.value,
            category.value,
            title.value,
            getNumberValue(value.value)
         )
      }
   }

   useEffect( () => {
      console.log()
   })

   return (
      <S.FormContainer onSubmit={ handleSubmit }>
         <Input id='addItem-date' type='date'  {...date}/>
         {/* <Input id='addItem-category' type='text' {...category}/> */}
         <Select id='addItem-category' options={categoriesDataMockup} {...category}/>
         <Input id='addItem-title' type='text'  {...title}/>
         <Input id='addItem-value' type='text' {...value}/>
         <Button label="Adicionar" icon={ <FaPlus /> } />
      </S.FormContainer>
   )
}

export default AddItem
