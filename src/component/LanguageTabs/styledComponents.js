import styled from 'styled-components'

export const LanguageTabsContainer = styled.li`
  font-family: 'Roboto';
`

export const CustomButton = styled.button`
  font-family: 'Roboto';
  height: 33px;
  width: 80px;
  border: 2px solid #db1c48;
  background-color: ${props => (props.isActive ? '#db1c48' : 'transparent')};
  border-radius: 15px;
  color: ${props => (props.isActive ? 'white' : '#db1c48')};
  cursor: pointer;
`
