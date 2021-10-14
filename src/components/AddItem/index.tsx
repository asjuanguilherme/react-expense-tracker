import * as S from './styles'
import { useState, useEffect, FormEventHandler, FormEvent } from 'react'
import useForm from '../../hooks/useForm'
import Input from '../Form/Input'
import { FaPlus } from 'react-icons/fa'

import Button from '../Button'
import { getTodayDate } from '../../helpers/date'

const AddItem = () => {

   const date = useForm('date', 'Data', getTodayDate('yyyy-mm-dd'))
   const category = useForm('default', 'Categoria')
   const title = useForm('name', 'Titulo')
   const value = useForm('default', 'Valor')

   const handleSubmit = ( e: FormEvent<HTMLFormElement> ) => {
      e.preventDefault()
      if( date.validate(), category.validate(), title.validate(), value.validate()) {
         
      }
   }

   return (
      <S.FormContainer onSubmit={ handleSubmit }>
         <Input id='addItem-date' type='date'  {...date}/>
         <Input id='addItem-category' type='text' {...category}/>
         <Input id='addItem-title' type='text'  {...title}/>
         <Input id='addItem-value' type='text' {...value}/>
         <Button label="Adicionar" icon={ <FaPlus /> } />
      </S.FormContainer>
   )
}

export default AddItem
