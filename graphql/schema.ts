import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
  type TerminationPoint {
    portId: String
  }
  type Node {
    nodeId: String
    ports: [TerminationPoint]
  }
  type LinkEdge {
    node: String
    port: String
  }
  type Link {
    linkId: String
    src: LinkEdge
    dst: LinkEdge
  }
  type Topology {
    nodes: [Node]
    links: [Link]
  }

  type Query {
    getTopology: Topology
  }
`;
