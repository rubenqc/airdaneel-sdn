import {ApolloServer, gql} from 'apollo-server-micro'
import {ApolloServerPluginLandingPageDisabled, ApolloServerPluginLandingPageGraphQLPlayground} from 'apollo-server-core'
import {MicroRequest} from "apollo-server-micro/dist/types";
import {ServerResponse} from "http";

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
    {name: 'Leeroy Jenkins', username: 'leeroy'},
    {name: 'Foo Bar', username: 'foobar'},
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

const apolloServer = new ApolloServer({
    typeDefs, resolvers, plugins: [
        process.env.NODE_ENV === 'production' ? ApolloServerPluginLandingPageDisabled : ApolloServerPluginLandingPageGraphQLPlayground
    ]
})

const startServer = apolloServer.start()

export default async function handler(req: MicroRequest, res: ServerResponse) {
    await startServer
    await apolloServer.createHandler({
        path: '/api/graphql',
    })(req, res)
}