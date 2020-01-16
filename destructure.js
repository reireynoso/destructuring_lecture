// What is destructuring and why would I want to do it?
// let {key1, key2, key3} = theObject

// REACT: This will be useful for destructuring props {}

const module3 = {
    name: "Dumbo Web 111819",
    population: 15,
    founded: 102819,
    languages: ["Ruby", "Rails", "Javascript"],
    leadInstructor: {
        "name": "Eric"
    }
  }

//  How do I save certain key-value pairs to a variable?

// const name = module3.name;
// const population = module3.population;
// const founded = module3.founded;
// const mascot = module3.mascot;
// const leadInstructor = module3.leadInstructor.name;
// const coaches = module3.coaches.name;




// const {name, population, founded, mascot:logo, leadInstructor: {name: leadName}, coaches: {name: coachesName}} = module3
// console.log(name)
// console.log(founded)
// console.log(population)
// console.log(leadName)
// console.log(logo)
// console.log(coachesName)
// console.log(startingFive)
// console.log(module3.coaches.name)
// Can it be done better and DRY-er?
// Could we do all of the above in one line?
// // Could I rename variables as I destructure them?
// Can we access nested objects?




// Could I do it to an array?

  const instructorsNames = ["Eric", "Sylwia", "Rei"];

//   const [masterCoder, prettyAdvancedCoder, ...prettyMasterCoder] = instructorsNames
  
  // const masterCoder = instructorsNames[0];
  // const prettyAdvancedCoder = instructorsNames[1];
  // const prettyOkayCoder = instructorsNames[2];

  // console.log(masterCoder);
  // console.log(prettyAdvancedCoder);
  // console.log(prettyMasterCoder);









// Could I do it to the parameters of a function?

  const instructors = [
    {
     name: "Henry",
     leadInstructor: true
    },
    {
      name: "Ian",
      leadInstructor: true
    },
    {
      name: "Leizl",
      leadInstructor: false
    },
    {
      name: "Rei",
      leadInstructor: false
    }
  ]

function greet({name, leadInstructor: lead}) {
  // const {name, lead} = instructor
  return `Hello, ${ lead ? "Master" : "Coach" } ${ name }!`
}

//pass as arg

//normal destructure


const me = { 
  name: "Rei",
  leadInstructor: false
};
greet(me)

// console.log(instructors.forEach(greet))

// console.log(greet(instructors[0]))
