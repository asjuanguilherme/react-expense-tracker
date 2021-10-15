import * as S from './styles'
import InputMask from 'react-input-mask'
import { FaExclamationCircle } from 'react-icons/fa'
import { ChangeEventHandler, FocusEventHandler } from 'react'
import SelectOption from './SelectOption'

type Option = {
   value: string;
   name: string;
}

interface Props {
   label: string;
   id: string;
   error: string | null;
   value: string;
   onChange: ChangeEventHandler;
   onBlur: FocusEventHandler;
   options: Option[];
}

const Select = ( { label, id, error = null, onChange, onBlur, options } : Props) => {
   
   const renderOptions = () => (
      options.map((option, index) => (
         <SelectOption value={option.value} name={option.name} />
      ))
   )

   //onChange={ onChange } onBlur={ onBlur }

   return (
      <S.Wrapper>
         { label &&
            <S.Label htmlFor={ id }> { label } </S.Label>
         }

         <S.Select error={ error } onBlur={ onBlur }>
            <S.OptionsList>
               { renderOptions() }
            </S.OptionsList>
         </S.Select>

         { error &&
            <S.Error>
               <FaExclamationCircle />
               { error }
            </S.Error>
         }
      </S.Wrapper>
   )
}

export default Select
