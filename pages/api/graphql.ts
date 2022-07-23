import { ApolloServer } from 'apollo-server-micro';
import {
  ApolloServerPluginLandingPageDisabled,
  ApolloServerPluginLandingPageGraphQLPlayground,
} from 'apollo-server-core';
import { MicroRequest } from 'apollo-server-micro/dist/types';
import { ServerResponse } from 'http';

import { typeDefs } from '../../graphql/schema';
import { resolvers } from '../../graphql/resolvers';

export const config = {
  api: {
    bodyParser: false,
  },
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [
    process.env.NODE_ENV === 'production'
      ? ApolloServerPluginLandingPageDisabled
      : ApolloServerPluginLandingPageGraphQLPlayground,
  ],
});

const startServer = apolloServer.start();

export default async function handler(req: MicroRequest, res: ServerResponse) {
  await startServer;
  await apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res);
}
