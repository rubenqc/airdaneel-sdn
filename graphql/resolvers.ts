const users = [
  { name: 'Leeroy Jenkins', username: 'leeroy' },
  { name: 'Foo Bar', username: 'foobar' },
];

export const resolvers = {
  Query: {
    users() {
      return users;
    },
    // user(parent: string, { username }) {
    //     return users.find((user) => user.username === username)
    // },
  },
};
