import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'

export const Wrapper = styled.div`
  display: flex;
  max-width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  width: 100%;

  background-color: white;
  border-radius: 1rem;

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    position: relative;
  }
`

const Section = styled.div`
  flex: 1;

  @media screen and (max-width: 768px) {
    flex: 100%;
    margin-bottom: 0.75rem;
    font-size: 0.875rem;
  }
`

export const Date = styled(Section)`
  flex: 1.3;
`

export const Title = styled(Section)`
  flex: 1.3;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
    font-weight: 600;
    flex: 100%;
  }
`

export const Category = styled(Section)`
  @media screen and (max-width: 768px) {
    flex: 1;
    margin-bottom: 0;
  }

  span {
    display: inline-block;
    padding: 0.3rem 0.8rem;
    background-color: ${props => props.color};
    border-radius: 0.3rem;
    color: white;
  }
`

export const Value = styled(Section)<{ type: string }>`
  color: ${props =>
    props.type === 'income'
      ? props.theme.colors.success
      : props.theme.colors.danger};
  font-weight: 600;

  @media screen and (max-width: 768px) {
    flex: 1;
    text-align: right;
    margin-bottom: 0;
  }
`

export const RemoveItem = styled(FaTimes)`
  cursor: pointer;
  opacity: 0.3;
  transition: 0.3s;

  &:hover {
    opacity: 1;
  }

  @media screen and (max-width: 768px) {
    position: absolute;
    right: 1rem;
    top: 1rem;
  }
`
