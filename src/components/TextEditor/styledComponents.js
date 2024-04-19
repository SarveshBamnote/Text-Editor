import styled from 'styled-components'

export const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #25262c;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const MainContainer = styled.div`
  width: 60%;
  height: 80%;
  background-color: #1b1c22;
  padding: 20px;
  display: flex;
`
export const HeadingAndImageContainer = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Heading = styled.h1`
  color: #f8fafc;
  font-size: 28px;
  font-family: 'Roboto';
`
export const Image = styled.img`
  width: 300px;
  margin: 80px 20px;
`
export const TextEditorContainer = styled.div`
  width: 55%;
  background-color: #25262c;
  border: 1px solid #334155;
  border-radius: 6px;
`
export const StylingButtons = styled.ul`
  display: flex;
  align-items: center;
  padding-left: 20px;
`
export const ListItem = styled.li`
  list-style-type: none;
`

export const Button = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  margin-top: 12px;
  margin-left: 10px;

  color: ${props => (props.color === true ? '#faff00' : '#f1f5f9')};
`
export const HrLine = styled.hr`
  border: 1px solid #334155;
`
export const Input = styled.textarea`
  background-color: transparent;
  border: none;
  outline: none;
  color: #f1f5f9;
  font-size: 16px;
  font-family: 'Roboto';
  flex-grow: 1;
  padding: 20px;

  font-weight: ${props => (props.bold === true ? 'bold' : 'normal')};
  font-style: ${props => (props.italic === true ? 'italic' : 'normal')};
  text-decoration: ${props =>
    props.underline === true ? 'underline' : 'normal'};
`
