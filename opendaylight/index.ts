import fetch from 'node-fetch';

import { ConfigController } from './entities/config';
import { NodeEntity, Link, Topology } from './entities/topology';
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

  async getTopology(): Promise<Topology> {
    const data: NetworkTopology = await this.fetchController(
      '/restconf/operational/network-topology:network-topology',
    );

    const {
      'network-topology': {
        topology: [firstTopology],
      },
    } = data;

    const nodes = (firstTopology.node || []).map(
      (n): NodeEntity => ({
        nodeId: n['node-id'],
        ports: n['termination-point'].map((t) => ({
          portId: t['tp-id'],
        })),
      }),
    );

    const links = (firstTopology.link || []).map(
      (l): Link => ({
        linkId: l['link-id'],
        src: {
          node: l.source['source-node'],
          port: l.source['source-tp'],
        },
        dst: {
          node: l.destination['dest-node'],
          port: l.destination['dest-tp'],
        },
      }),
    );

    return {
      nodes,
      links,
    };
  }
}
