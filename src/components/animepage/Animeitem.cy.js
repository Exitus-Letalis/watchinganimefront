import React from 'react'
import Animeitem from './Animeitem'

describe('<Animeitem />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Animeitem />)
  })
})