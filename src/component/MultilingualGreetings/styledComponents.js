import styled from 'styled-components'

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: bold;
  color: #1e293b;
  text-align: center;
  margin-bottom: 30px;
`
export const MultiLanguageGreetingMainContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const MultiLanguageGreeting = styled.div`
  width: 70%;
  min-height: 100vh;
  padding-top: 50px;
  padding-bottom: 50px;
`

export const LanguageListContainer = styled.ul`
  list-style: none;
  padding-left: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const ActiveLanguageContainer = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ActiveLanguageImage = styled.img`
  width: 300px;
`
