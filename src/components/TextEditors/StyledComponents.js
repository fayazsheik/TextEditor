import styled from 'styled-components'

export const App = styled.div`
  background-color: #25262c;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #1b1c22;
  height: 70vh;
  border-radius: 5px;
  width: 40vw;
`
export const Image = styled.image`
  width: 20vw;
`
export const Heading = styled.h1`
  color: #f8fafc;
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: bold;
  text-align: center;
`

export const TextContainer = styled.div`
  width: 20vw;
  height: 50vh;
  border-width: 1px solid #ffffff;
  background-color: #25262c;
  margin: 10px;
  border-radius: 8px;
`

export const UnOrderListContainer = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  border: 1px solid #f1f5f9;
`

export const Buttons = styled.button`
  background-color: #25262c;
  border-width: 0px;
`
export const TextArea = styled.textarea`
  background-color: transparent;
  color: #f1f5f9;
  margin-top: 0px;
`
