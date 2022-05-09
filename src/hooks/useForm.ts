import { useState } from 'react'

interface Validation {
  [tag: string]: {
    regex: RegExp
    message: string
  }
}

const validationTypes: Validation = {
  date: {
    regex: /^[0-9]{4}[-][0-9]{2}[-][0-9]{2}$/,
    message: 'Data inválida.'
  },
  name: {
    regex: /^.{3,}$/,
    message: 'Muito pequeno'
  },
  value: {
    regex: /^[0-9]{0,}([,][0-9]{0,})?$/,
    message: 'Valor inválido'
  },
  select: {
    regex: /.{0,}/,
    message: 'Nenhum selecionado'
  },
  default: {
    regex: /^.{1,}$/,
    message: ''
  }
}

const useForm = (type: string, label: string, defaultValue?: string) => {
  const [value, setValue] = useState<string>(defaultValue || '')
  const [error, setError] = useState<string | null>(null)

  const validate = (value: string) => {
    if (value.length === 0) {
      setError('Este campo é obrigatório.')

      return false
    } else if (!validationTypes[type].regex.test(value)) {
      setError(validationTypes[type].message)

      return false
    } else {
      setError(null)

      return true
    }
  }

  const onChange = (event: any) => {
    if (error) validate(event.target.value)

    setValue(event.target.value)
  }

  return {
    label,
    value,
    setValue,
    error,
    onChange,
    onBlur: () => validate(value),
    validate: () => validate(value)
  }
}

export default useForm
