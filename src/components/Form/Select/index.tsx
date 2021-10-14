import * as S from './styles'
import InputMask from 'react-input-mask'
import { FaExclamationCircle } from 'react-icons/fa'
import { ChangeEventHandler, FocusEventHandler } from 'react'

interface Props {
   label: string;
   id: string;
   error: string | null;
   value: string;
   onChange: ChangeEventHandler;
   onBlur: FocusEventHandler;
   options: any;
}

const Select = ( { label, id, error = null, onChange, onBlur, options } : Props) => {
   
   // const renderOptions = () => (
   //    options.map( option => (
   //       <S.Option value={option}>{ Object.keys(option)[0] }</S.Option>
   //    ))
   // )

   return (
      <S.Wrapper>
         { label &&
            <S.Label htmlFor={ id }> { label } </S.Label>
         }

         <S.Select onChange={ onChange } onBlur={ onBlur } error={ error }>
            {/* { renderOptions() } */}
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
