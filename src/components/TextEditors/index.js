import {Component} from 'react'
import {VscBold, GoItalic, AiOutlineUnderline} from 'react-icons/all'

import {
  App,
  MainContainer,
  Heading,
  TextContainer,
  UnOrderListContainer,
  Buttons,
  TextArea,
} from './StyledComponents'

class TextEditors extends Component {
  state = {
    boldActive: false,
    italicActive: false,
    underlineActive: false,
  }

  toggleBold = () => {
    this.setState(prevState => ({
      boldActive: !prevState.boldActive,
    }))
  }

  toggleItalic = () => {
    this.setState(prevState => ({
      italicActive: !prevState.italicActive,
    }))
  }

  toggleUnderline = () => {
    this.setState(prevState => ({
      underlineActive: !prevState.underlineActive,
    }))
  }

  render() {
    const {boldActive, italicActive, underlineActive} = this.state
    const textAreaStyle = {
      fontWeight: boldActive ? 'bold' : 'normal',
      fontStyle: italicActive ? 'italic' : 'normal',
      textDecoration: underlineActive ? 'underline' : 'none',
    }
    return (
      <App>
        <MainContainer>
          <div>
            <Heading>Text Editor</Heading>
            <img
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
              width="300"
            />
          </div>

          <TextContainer>
            <UnOrderListContainer>
              <li>
                <Buttons
                  onClick={this.toggleBold}
                  style={{color: boldActive ? '#faff00' : '#f1f5f9'}}
                  data-testid="bold"
                  type="button"
                >
                  <VscBold size={25} />
                </Buttons>
              </li>
              <li>
                <Buttons
                  type="button"
                  onClick={this.toggleItalic}
                  style={{color: italicActive ? '#faff00' : '#f1f5f9'}}
                  data-testid="italic"
                >
                  <GoItalic size={25} />
                </Buttons>
              </li>
              <li>
                <Buttons
                  type="button"
                  onClick={this.toggleUnderline}
                  style={{color: underlineActive ? '#faff00' : '#f1f5f9'}}
                  data-testid="underline"
                >
                  <AiOutlineUnderline size={25} />
                </Buttons>
              </li>
            </UnOrderListContainer>
            <TextArea rows="18" cols="34" style={textAreaStyle} />
          </TextContainer>
        </MainContainer>
      </App>
    )
  }
}

export default TextEditors
