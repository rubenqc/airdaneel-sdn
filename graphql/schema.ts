import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
  type TerminationPoint {
    tpId: String
  }
  type Node {
    nodeId: String
    ports: [TerminationPoint]
  }
  type Query {
    getNodes: [Node]
  }
`;
