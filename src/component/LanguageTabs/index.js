import {LanguageTabsContainer, CustomButton} from './styledComponents'

const LanguageTabs = props => {
  const {languageDetail, getActiveTabId, isActive} = props
  const {id, buttonText} = languageDetail
  const getTabId = () => {
    getActiveTabId(id)
  }
  return (
    <LanguageTabsContainer>
      <CustomButton type="button" onClick={getTabId} isActive={isActive}>
        {buttonText}
      </CustomButton>
    </LanguageTabsContainer>
  )
}

export default LanguageTabs
