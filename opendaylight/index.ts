import fetch from 'node-fetch';

import { ConfigController } from './entities/config';
import { NodeEntity } from './entities/node';
import { NetworkTopology } from './entities/opendaylight/network-topology';

export class OpenDaylightController {
  uri: string;

  constructor(initialConfig: ConfigController) {
    this.uri = `http${initialConfig.https ? 's' : ''}://${initialConfig.ip}:${initialConfig.port}`;
  }

  async fetchController(path: string): Promise<any> {
    const res = await fetch(`${this.uri}${path}`);
    return res.json();
  }

  async getNodes(): Promise<NodeEntity[]> {
    const data: NetworkTopology = await this.fetchController(
      '/restconf/operational/network-topology:network-topology',
    );

    const {
      'network-topology': {
        topology: [firstTopology],
      },
    } = data;

    return firstTopology.node.map(
      (n): NodeEntity => ({
        nodeId: n['node-id'],
        ports: n['termination-point'].map((t) => ({
          tpId: t['tp-id'],
        })),
      }),
    );
  }
}
