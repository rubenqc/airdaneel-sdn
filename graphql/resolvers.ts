import { OpenDaylight } from '../opendaylight';
import configuration from '../config/configuration';

export const resolvers = {
  Query: {
    getTopology() {
      const odl = new OpenDaylight(configuration.controller);
      return odl.getTopology();
    },
    // user(parent: string, { username }) {
    //     return users.find((user) => user.username === username)
    // },
  },
};
