const userInfo = {
    id: 101,
    email: 'rei@dev.com',
    personalInfo: {
        name: 'Rei',
        address: {
            line1: '81 Prospect St.',
            city: 'Brooklyn',
            state: 'NY'
        }
    }
}

const {id, email, personalInfo:{address:{state:name}}} = userInfo

// const {state} = personalInfo.address
// console.log("id", id)
// console.log("email", email)
// console.log("personal Info", name)

console.log(name)