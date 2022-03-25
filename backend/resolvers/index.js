let {
  startupList,
  stageList,
  stepList,
  startupProgress,
} = require("../data-source");
const { nanoid } = require("nanoid");
const { Stage, Step, Startup } = require("../models");

Startup.factory((builder) => {
  Startup.create({
    logo: "logo1",
    name: "Bytes Multimedia",
    description: "Multimedia",
    date_established: "23-03-2022",
  });

  Startup.create({
    logo: "logo2",
    name: "Quick Meal Restaurant",
    description: "Fast food restaurant",
    date_established: "23-03-2022",
  });

  Startup.create({
    logo: "logo3",
    name: "Zip-Pay",
    description: "Secure payment solution",
    date_established: "23-03-2022",
  });
});

Stage.factory((builder) => {
  //Foundation
  let stageObject = Stage.create({
    name: "Foundation",
  });

  stageObject.createStep({
    name: "Setup virtual office",
  });

  stageObject.createStep({
    name: "Set mission & vision",
  });

  stageObject.createStep({
    name: "Select business name",
  });

  stageObject.createStep({
    name: "Buy domains",
  });

  ///Discovery
  stageObject = Stage.create({
    name: "Discovery",
  });

  stageObject.createStep({
    name: "Create roadmap",
  });

  stageObject.createStep({
    name: "Competitor analysis",
  });

  //Delivery
  stageObject = Stage.create({
    name: "Delivery",
  });

  stageObject.createStep({
    name: "Release marketting website",
  });

  stageObject.createStep({
    name: "Release MVP",
  });
});

const resolvers = {
  Query: {
    startups: () => Startup.all(),
    startup: (parent, { id }) => Startup.find(id),

    stages: () => Stage.all(),
    stage: (parent, { id }) => Stage.find(id),

    steps: () => Step.all(),
    step: (parent, { id }) => Step.find(id),
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
      return (startupList = startupList.filter((item) => item.id != id));
    },
    createStartupProgress: (parent, { data }) => {
      console.log(data);
      let newData = { ...data, id: nanoid() };
      startupProgress.push(newData);
      return newData;
    },
    removeStartupProgress: (parent, { id }) => {
      return (startupProgress = startupProgress.filter(
        (item) => item.id != id
      ));
    },
  },

  Startup: {},
  Step: {
    stage: (parent, arg, context) => {
      return parent.stage();
    },
  },
};

module.exports = resolvers;
