// What is destructuring and why would I want to do it?
// theObject = {
//     key1: "",
//     key2: "",
//     key3: "",
// }

// let {key1, key2, key3} = theObject

// REACT: This will be useful for destructuring props {}

// console.log('hey')

const module3 = {
    name: "Dumbo Web 111819",
    population: 15,
    founded: 102819,
    languages: ["Ruby", "Rails", "Javascript"],
    leadInstructor: {
        "name": "Eric"
    }
  }

// console.log(name, population, founded, languages, leadInstructor)

const {population, name, founded, languages, leadInstructor: {name: notName}} = module3
// const ian = module3
// console.log(ian)
// console.log(population2)
// console.log(module3)
// console.log(name)
// console.log(notName)




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

//   console.log(instructorsNames[0])
//   console.log(instructorsNames[1])

  const [firstCoder, ,Sylwia] = instructorsNames

//   console.log(instructorsNames)
//   console.log(Sylwia)
//   console.log()

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
     name: "Henry(Eric)",
     leadInstructor: true
    },
    {
      name: "Ian",
      leadInstructor: true
    },
    {
      name: "Sylwia",
      leadInstructor: false
    },
    {
      name: "Rei",
      leadInstructor: false
    }
  ]

//   const {name, leadInstructor} = me

function greet( {name, leadInstructor:name} ) {
  // const {name, lead} = instructor
  return `Hello, ${ lead ? "Master" : "Coach" } ${ name }!`
// return `Hello ${name}`
}

//pass as arg

//normal destructure


const me = { 
  name: "Ian",
  leadInstructor: true
};
console.log(greet(me))

// console.log(instructors.forEach(greet))

// console.log(greet(instructors[0]))
