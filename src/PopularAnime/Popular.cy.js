import React from 'react'
import Popular from './Popular'

describe('<Popular />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Popular />)
  })
})