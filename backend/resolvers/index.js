const { startupList, stageList, stepList } = require("../data-source");

const resolvers = {
  Query: {
    fetchStartups: () => {
      return startupList;
    },

    getStartup({ id }) {
      if (startupList.find((item) => (item.id = id))) {
        return startupList.find((item) => (item.id = id));
      }
      return {};
    },
  },

  Mutation: {
    addStartup: ({ data }) => {
      let newData = { ...data, id: startupList.length + 1 };
      console.log(newData);
      startupList.push(newData);
      return newData;
    },
  },

  Startup: {
    options: () => {
      return [
        {
          name: "AKL",
        },
      ];
    },
  },
};

module.exports = resolvers;
