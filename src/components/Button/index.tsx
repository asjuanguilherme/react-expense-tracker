import { ReactComponentElement } from 'react'
import * as S from './styles'

interface Props {
   label: string;
   onClick: VoidFunction;
   icon?: ReactComponentElement<any>;
   variant?: string;
}

const Button = ({label, onClick, icon, variant = 'primary'} : Props) => {
   return (
      <S.Wrapper onClick={ onClick } variant={ variant } >
         <span>
            { label }
         </span>
         { icon }
      </S.Wrapper>
   )
}

export default Button
