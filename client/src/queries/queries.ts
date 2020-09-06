import { gql } from "apollo-boost";

const getContactsQuery = gql`
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

const addContactMutation = gql`
  mutation(
    $firstName: String!,
    $lastName: String!,
    $email: String!,
    $email2: String,
    $email3: String,
    $phone: Int!,
    $phone2: Int,
    $phone3: int,
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

export { getContactsQuery, addContactMutation }