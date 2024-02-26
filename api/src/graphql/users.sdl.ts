export const schema = gql`
  type User {
    id: Int!
    name: String
    age: Int
    email: String!
  }

  type Query {
    users: [User!]! @skipAuth
    user(id: Int!): User @skipAuth
  }

  input CreateUserInput {
    name: String
    age: Int
    email: String!
  }


  input UpdateUserInput {
    name: String
    age: Int
    email: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @skipAuth
    updateUser(id: Int!, input: UpdateUserInput!): User! @skipAuth
    deleteUser(id: Int!): User! @requireAuth
  }
`
