const { faker} = require('@faker-js/faker')

const persona = {
    firstName: String,
    middleName: String,
    lastName: String,
    DOB: Date,
    bio: String,
    username: String,
    email: String,
}

// initiate faker.js
const randomInt = (max)=>{return Math.floor(Math.random()*max)}
faker.seed(randomInt(999))

async function generatePersona(){
    await fetchFakeFirstName().then((r)=>setPersonaFirstName(r))
    //setPersonaFirstName(await fetchFakeFirstName())
    setPersonaMiddleName(await fetchFakeMiddleName())
    setPersonaLastName(await fetchFakeLastName())
    setPersonaDOB(await fetchFakeDOB())
    setPersonaBio(await fetchFakeBio())
    setUsername(await fetchFakeUsername())
    setPersonaEmail(await fetchFakeEmail())
}

async function fetchFakeUsername(){
    return faker.internet.username({firstName:persona.firstName})
}

async function fetchFakeFirstName(){
    return faker.person.firstName()
}

async function fetchFakeMiddleName(){
    return faker.person.middleName()
}

async function fetchFakeLastName(){
    return faker.person.lastName()
}

async function fetchFakeDOB(){
    return faker.date.birthdate()
}

async function fetchFakeBio(){
    return faker.person.bio()
}

async function fetchFakeEmail(){
    const randoword = faker.word.words()
    return faker.internet.email({firstName:persona.firstName, lastName:randoword, allowSpecialCharacters:true})
}

async function fetchMenacingUsername(){
    const abreev = faker.hacker.abbreviation()
    const phrase = faker.hacker.ingverb()
    console.log(abreev)
    console.log(phrase)
    const username = faker.internet.username({firstName: phrase.toLowerCase()})
    console.log(username)
}



async function setPersonaFirstName(name){
    persona.firstName = await name;
   console.log(`First Name: ${name}`)
}

function setPersonaMiddleName(name){
    persona.middleName = name;
    console.log(`Middle Name: ${name}`)
}

function setPersonaLastName(name){
    persona.lastName = name;
    console.log(`Last Name: ${name}`)
}

function setPersonaDOB(dob){
    persona.DOB = dob;
    console.log(`DOB: ${dob}`)
}

function setPersonaBio(bio){
    persona.bio = bio;
    console.log(`Bio Seed: ${bio}`)
}
function setUsername(username){
    persona.username = username
    console.log(`Username: ${username}`)
}

function setPersonaEmail(email){
    persona.email = email
    console.log(`Email: ${email}`)
}

generatePersona()
