import {Component} from 'react'

import LanguageTabs from '../LanguageTabs'

import {
  MultiLanguageGreeting,
  Heading,
  LanguageListContainer,
  MultiLanguageGreetingMainContainer,
  ActiveLanguageContainer,
  ActiveLanguageImage,
} from './styledComponents'

const initialId = 'bfdf40eb-eec9-4a66-a493-752fe689f0d0'

class MultilingualGreetings extends Component {
  state = {activeTabId: initialId}

  getActiveTabId = id => {
    this.setState({activeTabId: id})
  }

  renderLanguageButtons = () => {
    const {languageGreetingsList} = this.props
    const {activeTabId} = this.state
    return (
      <LanguageListContainer>
        {languageGreetingsList.map(eachItem => (
          <LanguageTabs
            key={eachItem.id}
            languageDetail={eachItem}
            isActive={eachItem.id === activeTabId}
            getActiveTabId={this.getActiveTabId}
          />
        ))}
      </LanguageListContainer>
    )
  }

  getActiveLanguageDetail = () => {
    const {languageGreetingsList} = this.props
    const {activeTabId} = this.state
    const activeLanguageDetail = languageGreetingsList.filter(
      eachItem => eachItem.id === activeTabId,
    )

    const {imageAltText, imageUrl} = activeLanguageDetail[0]

    return (
      <ActiveLanguageContainer>
        <ActiveLanguageImage src={imageUrl} alt={imageAltText} />
      </ActiveLanguageContainer>
    )
  }

  render() {
    return (
      <MultiLanguageGreetingMainContainer>
        <MultiLanguageGreeting>
          <Heading>Multilingual Greetings</Heading>
          {this.renderLanguageButtons()}
          {this.getActiveLanguageDetail()}
        </MultiLanguageGreeting>
      </MultiLanguageGreetingMainContainer>
    )
  }
}

export default MultilingualGreetings
