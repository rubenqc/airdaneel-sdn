interface TerminationPoint {
  portId: string;
}

export interface NodeEntity {
  nodeId: string;
  ports: TerminationPoint[];
}

export interface Link {
  linkId: string;
  src: {
    node: string;
    port: string;
  };
  dst: {
    node: string;
    port: string;
  };
}

export interface Topology {
  nodes: NodeEntity[];
  links: Link[];
}
