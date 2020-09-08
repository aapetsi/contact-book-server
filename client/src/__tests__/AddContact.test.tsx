import React from 'react'
import { render } from '@testing-library/react'
import AddContact from '../components/AddContact'

test('renders add contact form', () => {
  const wrapper = render(<AddContact />)
  console.log(wrapper.debug()) 
})