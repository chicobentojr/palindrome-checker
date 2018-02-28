import React from 'react'
import { Header, Icon } from 'semantic-ui-react'

const AppHeader = () => (
  <Header as='h2' icon>
    <Icon name='check circle' />
    Palindrome Checker
    <Header.Subheader>
      Insert your sentence and check if it is a palindrome.
    </Header.Subheader>
  </Header>
)

export default AppHeader
