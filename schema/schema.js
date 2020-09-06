const graphql = require('graphql')
const _ = require('lodash')
// const Book = require('../models/book')
// const Author = require('../models/author')
const Contact = require('../models/contact')

const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
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
        return Author.findById(parent.authorId)
      },
    },
  }),
})

const TwitterType = new GraphQLObjectType({
  name: 'Twitter',
  fields: () => ({
    twitterUrl: { type: GraphQLString },
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
        return Book.find({ authorId: parent.id })
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
        return Book.findById(args.id)
      },
    },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        // return books
        return Book.find({})
      },
    },
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // return _.find(authors, { id: args.id })
        return Author.findById(args.id)
      },
    },
    authors: {
      type: new GraphQLList(AuthorType),
      resolve(parent, args) {
        return Author.find({})
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
        return Contact.find({})
      },
    },
  },
})

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    // addAuthor: {
    //   type: AuthorType,
    //   args: {
    //     name: { type: new GraphQLNonNull(GraphQLString) },
    //     age: { type: new GraphQLNonNull(GraphQLInt) },
    //   },
    //   resolve(parent, args) {
    //     let author = new Author({
    //       name: args.name,
    //       age: args.age,
    //     })
    //     return author.save()
    //   },
    // },
    // addBook: {
    //   type: BookType,
    //   args: {
    //     name: { type: new GraphQLNonNull(GraphQLString) },
    //     genre: { type: new GraphQLNonNull(GraphQLString) },
    //     authorId: { type: GraphQLID },
    //   },
    //   resolve(parent, args) {
    //     let book = new Book({
    //       name: args.name,
    //       genre: args.genre,
    //       authorId: args.authorId,
    //     })
    //     return book.save()
    //   },
    // },
    addContact: {
      type: ContactType,
      args: {
        firstName: { type: new GraphQLNonNull(GraphQLString) },
        lastName: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        email2: { type: GraphQLString },
        email3: { type: GraphQLString },
        phone: { type: new GraphQLNonNull(GraphQLInt) },
        phone2: { type: GraphQLInt },
        phone3: { type: GraphQLInt },
        twitter: { type: GraphQLString },
      },
      resolve(parent, args) {
        let contact = new Contact({
          firstName: args.firstName,
          lastName: args.lastName,
          email: args.email,
          email2: args.email2,
          email3: args.email3,
          phone: args.phone,
          phone2: args.phone2,
          phone3: args.phone3,
          twitter: args.twitter,
        })
        return contact.save()
      },
    },
    editContact: {
      type: ContactType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        firstName: { type: new GraphQLNonNull(GraphQLString) },
        lastName: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        email2: { type: GraphQLString },
        email3: { type: GraphQLString },
        phone: { type: new GraphQLNonNull(GraphQLInt) },
        phone2: { type: GraphQLInt },
        phone3: { type: GraphQLInt },
        twitter: { type: GraphQLString },
      },
      resolve(parent, args) {
        let newContactDetails = {
          firstName: args.firstName,
          lastName: args.lastName,
          email: args.email,
          email2: args.email2,
          email3: args.email3,
          phone: args.phone,
          phone2: args.phone2,
          phone3: args.phone3,
          twitter: args.twitter,
        }
        return Contact.findByIdAndUpdate(
          { _id: args.id },
          { $set: newContactDetails },
          { new: true }
        )
      },
    },
    deleteContact: {
      type: ContactType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        return Contact.findByIdAndDelete(args.id)
      },
    },
    deleteContacts: {
      type: ContactType,
      resolve(parent, args) {
        return Contact.deleteMany({})
      },
    },
  },
})

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
})
