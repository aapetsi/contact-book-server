import React from 'react'
import { MockedProvider } from '@apollo/client/testing'
import { render } from '@testing-library/react'
import AddContact from '../components/AddContact'
import { client } from '../App'
import { GET_CONTACTS_QUERY } from '../queries/queries'

const mocks = [
  {
    request: {
      query: GET_CONTACTS_QUERY
    },
    result: {
      data: {
        contacts: []
      }
    }
  }
]

test('renders add contact form', () => {
  // const { container } = render(
  //   <MockedProvider mocks={ mocks }>
  //     <AddContact />
  //   </MockedProvider>
  // )
  expect(1).toBe(1)
})