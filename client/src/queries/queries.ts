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
  mutation {
    insert_contacts_one(object: {
      firstName: "",
      lastName: "",
      email: "",
      email2: "",
      email3: "",
      phone: "",
      phone2: "",
      phone3: "",
      twitter: ""
    }) {
      id
      firstName
      lastName
      email
      phone
    }
  }
`

export { getContactsQuery, addContactMutation }