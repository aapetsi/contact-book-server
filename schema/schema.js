const graphql = require('graphql')
const _ = require('lodash')
const Book = require('../models/book')
const Author = require('../models/author')
const Contact = require('../models/contact')

const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
} = graphql

const ContactType = new GraphQLObjectType({
  name: 'Contact',
  fields: () => ({
    id: { type: GraphQLID },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    phone: { type: GraphQLInt },
    phone2: { type: GraphQLInt },
    phone3: { type: GraphQLInt },
    email: { type: GraphQLString },
    email2: { type: GraphQLString },
    email3: { type: GraphQLString },
    twitter: { type: GraphQLString },
  }),
})

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    author: {
      type: AuthorType,
      resolve(parent, args) {
        // return _.find(authors, { id: parent.authorId })
      },
    },
  }),
})

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        // return _.filter(books, { authorId: parent.id })
      },
    },
  }),
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // code to get data from db / other source
        // return _.find(books, { id: args.id })
      },
    },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        // return books
      },
    },
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // return _.find(authors, { id: args.id })
      },
    },
    authors: {
      type: new GraphQLList(AuthorType),
      resolve(parent, args) {
        console.log(parent)
        // return authors
      },
    },
    contact: {
      type: ContactType,
      args: { id: { type: GraphQLID } },
    },
    contacts: {
      type: new GraphQLList(ContactType),
      resolve(parent, args) {
        // return 'hello'
      },
    },
  },
})

module.exports = new GraphQLSchema({
  query: RootQuery,
})
