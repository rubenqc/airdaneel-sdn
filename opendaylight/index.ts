import fetch from 'node-fetch';

import { ConfigController } from './entities/config';
import { NodeEntity } from './entities/node';
import { NetworkTopology } from './entities/opendaylight/network-topology';

export class OpenDaylight {
  private readonly uri: string;
  private readonly credentials: string;

  constructor(initialConfig: ConfigController) {
    this.uri = `http${initialConfig.https ? 's' : ''}://${initialConfig.host}:${
      initialConfig.port
    }`;

    let buff = new Buffer(initialConfig.username + ':' + initialConfig.password);
    this.credentials = buff.toString('base64');
  }

  async fetchController(path: string, method: string = 'GET'): Promise<any> {
    let headers = new Headers();
    headers.set('Authorization', 'Basic ' + this.credentials);
    const res = await fetch(`${this.uri}${path}`, {
      method,
      headers,
    });
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
