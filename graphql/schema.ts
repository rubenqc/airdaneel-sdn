import {gql} from "apollo-server-micro";

export const typeDefs = gql`
    type Query {
        users: [User!]!
        user(username: String): User
    }
    type User {
        name: String
        username: String
    }
`