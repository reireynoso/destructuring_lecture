// What is destructuring and why would I want to do it?
// let {key1, key2, key3} = theObject

// REACT: This will be useful for destructuring props {}

const mod3 = {
    name: "Dumbo Web 102819",
    population: 13,
    founded: 102819,
    languages: ["Ruby", "Rails", "Javascript"]
  }

  // const name = mod3.name;
  // const population = mod3.population;
  // const founded = mod3.founded;
  // const languages_mastered = mod3.languages

  const {name, population, founded, languages: languages_mastered, eric} = mod3

  // console.log(mod3)
  // console.log(languages_mastered, "||" , name,"||" , population, "||" ,founded)
  // console.log(eric) // -> `eric` is undefined

// Could I do it to an array?
  // const [index0, index1, index2, ...] = theArray

  const boroughNames = ["Brooklyn", "Manhattan", "Bronx", "Queens", "Staten Island"];

  // const brooklynVar = boroughNames[0]
  // const manhattanVar = boroughNames[1]

  const [brooklynVar, manhattanVar, , queensVar] = boroughNames
  // Skipped The Bronx

  // console.log(brooklynVar, manhattanVar, queensVar)

// Could I do it to the parameters of a function?

// Objects passed in as a parameter could be destructured in the definition of the function
// REACT: Functional Components receive props {}

  function greet( {name, fullName} ) {

    // const name = person.name;
    // const fullName = person.fullName;

    return `Hello, ${ name }! Your legal name is ${ fullName }.`
  }

  const me = {
    name: "Eric",
    fullName: "Hyeok Jung Kim",
    middleName: "Hank"
  }

  console.log(greet(me))


  // What is destructuring and why would I want to do it?

  const module3 = {
    name: "Enumerati",
    population: 16,
    founded: 2019,
    mascot: "A Triangle",
    leadInstructor: {
        "name": "Henry Kim",
        codingLevel: "master"
    },
    coaches: {
      name: "Reizl"
    }  
  }

//  How do I save certain key-value pairs to a variable?

  // const name = module3.name;
  // const population = module3.population;
  // const founded = module3.founded;
  // const mascot = module3.mascot;
  // const leadInstructor = module3.leadInstructor.name;
  // const coaches = module3.coaches.name;

//   const {name, population, founded, mascot:logo, leadInstructor: {name: leadName}, coaches: {name: coachesName}} = module3
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

  const instructorsNames = ["Henry", "Leizl", "Rei", "fasjfhba", "Ian"];

  const [masterCoder, prettyAdvancedCoder, ...prettyMasterCoder] = instructorsNames
  
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

// WOW THAT'S AWESOME! Can I replace the values of different objects then?
// var a = 1;
// var b = 2;

// [a, b] = [b, a]

// console.log(a)