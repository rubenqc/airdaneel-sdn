interface TerminationPoint {
  tpId: string;
}

export interface NodeEntity {
  nodeId: string;
  ports: TerminationPoint[];
}
