import styled, { css, keyframes } from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
`

export const Label = styled.label`
  display: block;
  padding-left: 0.3rem;
  padding-bottom: 0.5em;
`

const SelectError = css`
  &,
  &:focus,
  &:hover {
    border-color: ${props => props.theme.colors.danger};
  }
`

export const Select = styled.select<{ error: string | null }>`
  width: 100%;
  padding: 0 1.2em;
  height: 2.5rem;

  border: 0.15em solid transparent;
  border-radius: 1em;

  font-size: 0.875rem;
  font-family: inherit;

  background-color: #ece9ff;

  transition: border 0.2s;

  &::placeholder {
    opacity: 0.45;
    font-style: italic;
    font-weight: lighter;
  }

  &:focus {
    background-color: #ece9ff;
    border-color: #7070ff;
  }

  ${props => (props.error ? SelectError : '')}
`

export const OptionsList = styled.div``

export const Option = styled.div``

const showError = keyframes`
   from {
      transform: translateX(-1.5rem) translateY(130%);;
      opacity: .2;
   }

   to {
      transform: translateX(0) translateY(130%);;
      opacity: 1;
   }
`

export const Error = styled.span`
  display: flex;
  width: max-content;
  align-items: center;
  font-size: 0.75rem;

  border-radius: 1rem;
  position: absolute;
  left: 0.3rem;
  bottom: 0;
  transform: translateY(130%);

  color: ${props => props.theme.colors.danger};

  animation: ${showError} 0.3s;

  svg {
    margin-right: 4px;
    font-size: 0.9rem;
  }
`
