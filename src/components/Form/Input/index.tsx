import * as S from './styles'
import InputMask from 'react-input-mask'
import { FaExclamationCircle } from 'react-icons/fa'
import { ChangeEventHandler, FocusEventHandler } from 'react'

interface Props {
   type: 'text' | 'date';
   label: string;
   id: string;
   error: string | null;
   value: string;
   onChange: ChangeEventHandler;
   onBlur: FocusEventHandler;
}

const Input = ( { type, label, id, error = null, onChange, onBlur, value } : Props) => {
   
   return (
      <S.Wrapper>
         { label &&
            <S.Label htmlFor={ id }> { label } </S.Label>
         }

         <S.Input type={ type } value={ value } onChange={ onChange } onBlur={ onBlur } error={ error } />

         { error &&
            <S.Error>
               <FaExclamationCircle />
               { error }
            </S.Error>
         }
      </S.Wrapper>
   )
}

export default Input
