import { OpenDaylight } from '../opendaylight';
import configuration from '../config/configuration';

export const resolvers = {
  Query: {
    getNodes() {
      const odl = new OpenDaylight(configuration.controller);
      return odl.getNodes();
    },
    // user(parent: string, { username }) {
    //     return users.find((user) => user.username === username)
    // },
  },
};
