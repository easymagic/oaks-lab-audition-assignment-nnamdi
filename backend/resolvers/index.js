const startupList = [
 {
    id: 1,
    logo: "logo1",
    name: "test name",
    description: "test description",
    date_established: "23-03-2022"
 },
 {
    id: 2,
    logo: "logo2",
    name: "test name2",
    description: "test description2",
    date_established: "23-03-2022"
 },
 {
    id: 3,
    logo: "logo3",
    name: "test name3",
    description: "test description3",
    date_established: "23-03-2022"
 }

];

const resolvers = {
  
    fetchStartups:()=>{
       return startupList;
    }

};

module.exports = resolvers;