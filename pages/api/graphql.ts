import { ApolloServer, gql } from 'apollo-server-micro'

const typeDefs = gql`
    type Query {
        users: [User!]!
        user(username: String): User
    }
    type User {
        name: String
        username: String
    }
`
const users = [
    { name: 'Leeroy Jenkins', username: 'leeroy' },
    { name: 'Foo Bar', username: 'foobar' },
]

const resolvers = {
    Query: {
        users() {
            return users
        },
        // user(parent: string, { username }) {
        //     return users.find((user) => user.username === username)
        // },
    },
}

export const config = {
    api: {
        bodyParser: false,
    },
}

const apolloServer = new ApolloServer({ typeDefs, resolvers })

const startServer = apolloServer.start()

export default async function handler(req: any, res: any) {
    await startServer
    await apolloServer.createHandler({
        path: '/api/graphql',
    })(req, res)
}