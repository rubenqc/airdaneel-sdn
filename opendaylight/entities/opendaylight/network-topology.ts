// Typedef of /restconf/operational/network-topology:network-topology

export interface NetworkTopology {
  'network-topology': {
    topology: Topology[];
  };
}

export interface Topology {
  'topology-id': string;
  node: NodeEntity[];
  link: Link[];
}

export interface NodeEntity {
  'node-id': string;
  'termination-point': TerminationPoint[];
}

export interface TerminationPoint {
  'tp-id': string;
  'opendaylight-topology-inventory:inventory-node-connector-ref': string;
}

export interface Link {
  'link-id': string;
  source: {
    'source-node': string;
    'source-tp': string;
  };
  destination: {
    'dest-tp': string;
    'dest-node': string;
  };
}
