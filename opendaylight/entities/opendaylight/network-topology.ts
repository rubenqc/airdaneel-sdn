// Typedef of /restconf/operational/network-topology:network-topology

export interface NetworkTopology {
  'network-topology': {
    topology: Topology[];
  };
}

export interface Topology {
  'topology-id': string;
  node: NodeEntity[];
}

export interface NodeEntity {
  'node-id': string;
  'termination-point': TerminationPoint[];
}

export interface TerminationPoint {
  'tp-id': string;
  'opendaylight-topology-inventory:inventory-node-connector-ref': string;
}
