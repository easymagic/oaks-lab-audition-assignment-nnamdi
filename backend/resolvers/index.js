let { startupList, stageList, stepList } = require("../data-source");
const { nanoid } = require("nanoid");

const resolvers = {
  Query: {
    startups: () => startupList,
    startup: ({ id }) => startupList.find((item) => item.id == id),

    stages: () => stageList,
    stage: ({ id }) => stageList.find((item) => item.id == id),

    steps: () => stepList,
    step: ({ id }) => stepList.find((item) => item.id == id),
  },

  Mutation: {
    createStartup: (parent, { data }, context) => {
      console.log(data);
      let newData = { ...data, id: nanoid() };
      startupList.push(newData);
      return newData;
    },
    updateStartup: (parent, { id, data }) => {
      let index = -1;
      let record = startupList.filter((item, key) => {
        let match = item.id == id;
        if (match) {
          index = key;
        }
        return match;
      });
      startupList[index] = { ...record[0], ...data };
      return startupList[index];
    },
    removeStartup: (parent, { id }) => {
      return startupList = startupList.filter((item) => item.id != id);
    },
    createStartupProgress: ({ data }) => {},
    removeStartupProgress: ({ id }) => {},
  },

  Startup: {},
};

module.exports = resolvers;
