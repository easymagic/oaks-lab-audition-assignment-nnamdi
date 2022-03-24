const {nanoid} = require('nanoid');

const startupList = [
  {
    id: 1,
    logo: "logo1",
    name: "Bytes Multimedia",
    description: "Multimedia",
    date_established: "23-03-2022",
  },
  {
    id: 2,
    logo: "logo2",
    name: "Quick Meal Restaurant",
    description: "Fast food restaurant",
    date_established: "23-03-2022",
  },
  {
    id: 3,
    logo: "logo3",
    name: "Zip-Pay",
    description: "Secure payment solution",
    date_established: "23-03-2022",
  },
];

const stageList = [
  {
    id: 1,
    name: "Foundation",
  },
  {
    id: 2,
    name: "Discovery",
  },
  {
    id: 3,
    name: "Delivery",
  },
];

const stepList = [
  {
    id: 1,
    stage_id: 1,
    name: "Setup virtual office",
  },
  {
    id: 2,
    stage_id: 1,
    name: "Set mission & vision",
  },
  {
    id: 3,
    stage_id: 1,
    name: "Select business name",
  },
  {
    id: 4,
    stage_id: 1,
    name: "Buy domains",
  },
  {
    id: 5,
    stage_id: 2,
    name: "Create roadmap",
  },
  {
    id: 6,
    stage_id: 2,
    name: "Competitor analysis",
  },
  {
    id: 7,
    stage_id: 3,
    name: "Release marketting website",
  },
  {
    id: 8,
    stage_id: 3,
    name: "Release MVP",
  },
];

const startupProgress = [];

module.exports = { startupList, stageList, stepList , startupProgress};
