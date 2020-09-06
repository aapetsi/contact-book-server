// import { gql } from "apollo-boost";
import { gql } from '@apollo/client'

const GET_CONTACTS_QUERY = gql`
  {
    contacts {
      id
      firstName,
      lastName,
      email,
      phone
    }
  }
`

const ADD_CONTACT_MUTATION = gql`
  mutation(
    $firstName: String!,
    $lastName: String!,
    $email: String!,
    $email2: String,
    $email3: String,
    $phone: Int!,
    $phone2: Int,
    $phone3: Int,
    $twitter: String
  ) {
    insert_contacts_one(object: {
      firstName: $firstName,
      lastName: $lastName,
      email: $email,
      email2: $email2,
      email3: $email3,
      phone: $phone,
      phone2: $phone2,
      phone3: $phone3,
      twitter: $twitter
    }) {
      id
      firstName
      lastName
      email
      email2
      email3
      phone
      phone2
      phone3
      twitter
    }
  }
`

export { GET_CONTACTS_QUERY, ADD_CONTACT_MUTATION }