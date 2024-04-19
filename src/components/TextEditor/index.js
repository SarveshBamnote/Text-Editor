import {Component} from 'react'

import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  MainContainer,
  AppContainer,
  HeadingAndImageContainer,
  Heading,
  Image,
  TextEditorContainer,
  StylingButtons,
  ListItem,
  Button,
  HrLine,
  Input,
} from './styledComponents'

class TextEditor extends Component {
  state = {
    textInput: '',
    bold: false,
    italic: false,
    underline: false,
  }

  onChangeTextInput = event => {
    this.setState({textInput: event.target.value})
  }

  onClickToggleBold = () => {
    this.setState(prevState => ({bold: !prevState.bold}))
  }

  onClickToggleItalic = () => {
    this.setState(prevState => ({italic: !prevState.italic}))
  }

  onClickToggleUnderline = () => {
    this.setState(prevState => ({underline: !prevState.underline}))
  }

  render() {
    const {textInput, bold, italic, underline} = this.state

    return (
      <AppContainer>
        <MainContainer>
          <HeadingAndImageContainer>
            <Heading>Text Editor</Heading>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </HeadingAndImageContainer>
          <TextEditorContainer>
            <StylingButtons>
              <ListItem>
                <Button
                  onClick={this.onClickToggleBold}
                  data-testid="bold"
                  type="button"
                  color={bold}
                >
                  <VscBold size={25} />
                </Button>
              </ListItem>
              <ListItem>
                <Button
                  onClick={this.onClickToggleItalic}
                  data-testid="italic"
                  type="button"
                  color={italic}
                >
                  <GoItalic size={25} />
                </Button>
              </ListItem>
              <ListItem>
                <Button
                  onClick={this.onClickToggleUnderline}
                  data-testid="underline"
                  type="button"
                  color={underline}
                >
                  <AiOutlineUnderline size={25} />
                </Button>
              </ListItem>
            </StylingButtons>
            <HrLine />
            <Input
              onChange={this.onChangeTextInput}
              value={textInput}
              type="textarea"
              cols={53}
              rows={22}
              bold={bold}
              italic={italic}
              underline={underline}
            />
          </TextEditorContainer>
        </MainContainer>
      </AppContainer>
    )
  }
}

export default TextEditor
