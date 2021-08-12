// const { Tech, Matchup } = require('../models');

const resolvers = {
  Query: {
    getUser: async () => {
      return User.find({});
    },
  },
  Mutation: {
    createNewUser: async (parent, args) => {
      const matchup = await Matchup.create(args);
      return matchup;
    },
    saveBook: async (parent, { _id, techNum }) => {
      const vote = await Matchup.findOneAndUpdate(
        { _id },
        { $inc: { [`tech${techNum}_votes`]: 1 } },
        { new: true }
      );
      return vote;
    },
    deletesBook: async (parent, { _id, techNum }) => {
      const vote = await Matchup.findOneAndUpdate(
        { _id },
        { $inc: { [`tech${techNum}_votes`]: 1 } },
        { new: true }
      );
      return vote;
    },
  },
};

module.exports = resolvers;
