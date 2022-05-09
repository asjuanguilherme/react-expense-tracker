import * as S from './styles'
import { useState, useEffect, FormEvent } from 'react'
import useForm from '../../hooks/useForm'
import Input from '../Form/Input'
import { FaPlus } from 'react-icons/fa'

import Button from '../Button'
import { getTodayDate } from '../../helpers/date'
import { getNumberValue } from '../../helpers/values'
import * as history from '../../services/history'
import { categoriesDataMockup } from '../../data/categories'
import Select from '../Form/Select'

const AddItem = () => {
  const date = useForm('date', 'Data', getTodayDate('yyyy-mm-dd'))
  const category = useForm('default', 'Categoria')
  const title = useForm('name', 'Titulo', 'Transação')
  const value = useForm('value', 'Valor', '0,00')

  const validateNewItem = (): boolean => {
    return (
      date.validate() &&
      category.validate() &&
      title.validate() &&
      value.validate()
    )
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (validateNewItem()) {
      history.insertItem(
        date.value,
        category.value,
        title.value,
        getNumberValue(value.value)
      )
    }
  }

  const categoryOptions = categoriesDataMockup.map(category => ({
    name: category.name,
    value: category.slug
  }))

  return (
    <S.FormContainer onSubmit={handleSubmit}>
      <Input id="addItem-date" type="date" {...date} />
      <Select id="addItem-category" options={categoryOptions} {...category} />
      <Input id="addItem-title" type="text" {...title} />
      <Input id="addItem-value" type="text" {...value} />
      <Button label="Adicionar" icon={<FaPlus />} />
    </S.FormContainer>
  )
}

export default AddItem
