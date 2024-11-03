import React from 'react'
import { Regis } from './reg'

describe('<Regis />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Regis />)
  })
})