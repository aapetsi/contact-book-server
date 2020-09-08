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

const GET_CONTACT_QUERY = gql`
  query($id: Int!) {
    contacts_by_pk(id: $id) {
      firstName,
      lastName,
      email,
      email2,
      email3
      phone,
      phone2,
      phone3,
      twitter
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
/*
mutation {
  update_contacts_by_pk(pk_columns: {id: 3}, _set: {firstName: "rasta"}) {
  	firstName  
  }
}
*/
const UPDATE_CONTACT = gql`
  mutation(
    $id: Int!
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
    update_contacts_by_pk(
      pk_columns: {id: $id},
      _set: {
        firstName: $firstName,
        lastName: $lastName,
        email: $email,
        email2: $email2,
        email3: $email3,
        phone: $phone,
        phone2: $phone2,
        phone3: $phone3,
        twitter: $twitter
      }
    ) {
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

const DELETE_CONTACT = gql`
  mutation ($id: ID!) {
    delete_contacts_by_pk(id: $id) {
      firstName,
      lastName,
    }
  }
`

const DELETE_CONTACTS = gql`
  mutation {
    delete_contacts(where: {}) {
      affected_rows
    }
  }
`

export { GET_CONTACTS_QUERY, GET_CONTACT_QUERY, ADD_CONTACT_MUTATION, UPDATE_CONTACT, DELETE_CONTACT, DELETE_CONTACTS }