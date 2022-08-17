const function1 = () => {
    console.log('this is a function')
}

function1()

function function2() {
    console.log('this is also a function')
}

function2()

const sum = (num1,num2) => {
    return num1 + num2;
}

const add = sum(1,5)

console.log(add)

const multiply = (num1,num2) => {
    return num1*num2;
}

const times = multiply(5,7)

console.log(times)

const superFunction = (num1,num2,num3) => {
    const addition = sum(num1,num2)
    return addition * num3
}

const superResult = superFunction(5,10,20)
console.log(superResult)

const letters = ['l', 's', 'a', 'r', 'd', 'f']

console.log(letters)
console.log(`letters sorted --> ${letters.sort()}`)
console.log(`letters popped --> ${letters.pop()}`) /* removes last index */

letters.push('q')

console.log(`letters after push --> ${letters}`)

console.log(`letters shifted --> ${letters.shift()}`) /* removes index 0 */

console.log(letters)

letters.unshift('y') /* adds letter to index 0 */

console.log(letters)

console.log(letters.slice(0,3)) /* returns items within index called in slice argument, like pull index 0 - 3 */



let names = ['John', 'Mandeep', 'Ruby', 'Rose', 'Jackson']

console.log(names.concat(letters)) /* joins 2 arrays */

console.log(names.join(' ')) /* adds something before each item in array? */

console.log(names.reverse()) /* returns array in backwards index */

let superheroes = ['Wonder Woman', 'Captain America', 'Spiderman', 'Batman', 'The Flash']

for (const hero of superheroes) {
    console.log(`${hero} is a superhero!`)
}

let superheroesDetails = [
    {
      id: 1,
      name:'Wonder Woman',
      isDC : true
    },
    {
      id: 1,
      name:'Captain America',
      isDC : true
    },
    {
      id: 1,
      name:'Batman',
      isDC : true
    },
    {
      id: 1,
      name:'The Flash',
      isDC : true
    },
    {
      id: 1,
      name:'Spiderman',
      isDC : false
    }
  ]

console.log('\n')
for (const hero2 of superheroesDetails) {
    if (hero2.isDC === true) {
        console.log(`${hero2.name} is in the Justice League.`)
    } else console.log(`${hero2.name} is a superhero!`)
}


const outfits = [
    {
      id: 1,
      bottoms: "slacks",
      top: "orange",
      shoes: "leather",
      type: "formal",
      own: false
    },
    {
      id: 3,
      bottoms: "jeans",
      top: "t-shirt",
      shoes: "flip flops",
      type: "casual",
      own: true
    },
    {
      id: 2,
      bottoms: "yoga",
      top: "tank top",
      shoes: "flip flops",
      type: "casual",
      own: false
    },
    {
      id: 9,
      bottoms: "skirt",
      top: "blouse",
      shoes: "heals",
      type: "formal",
      own: true
    },
    {
      id: 6,
      bottoms: "shorts",
      top: "tank top",
      shoes: "none",
      type: "casual",
      own: true
    },
    {
      id: 7,
      bottoms: "jeans",
      top: "sweater",
      shoes: "boots",
      type: "casual",
      own: true
    },
    {
      id: 8,
      bottoms: "slacks",
      top: "button down",
      shoes: "dress",
      type: "formal",
      own: false
    },
  ]

console.log("\nbelow is the original outfits array\n")
console.log(outfits)

const outfitsCopy = outfits.map(outfit => {
    return outfit
})

console.log("\nbelow is the copied outfits array before we push\n")
console.log(outfitsCopy)

outfitsCopy.push({id: 10, bottoms: "lee jeans", top: "tshirt", shoes: "converse", type: "casual", own: true})

console.log("\nbelow is the copied outfits array after we push\n")
console.log(outfitsCopy)

console.log("\nbelow is the original outfits array!!\n")
console.log(outfits)

const casualOutfits = outfits.filter(outfit => {
  return outfit.type === "casual";
})

console.log("here is casual outfits")
console.log(casualOutfits)

console.log(`outfitsCopy after adding accessories`)
console.log(outfitsCopy)

const outfitsCopy2 = outfits.map(outfit => {
  outfit.accessories = true
  return outfit
})

// for (const element of outfitsCopy2) {
//    element.accessories = false
//  }

console.log("outfitsCopy2")
console.log(outfitsCopy2)

const outfitsCopy3 = outfits.map(outfit => {
  delete outfit.type
  delete outfit.own
  delete outfit.accessories
  return outfit
})

console.log("\noutfitsCopy3")
console.log(outfitsCopy3)

const ownedOutfits = outfits.filter(outfit => {
  return outfit.own = true
})

console.log("here are the outfits I own")
console.log(ownedOutfits)

const outfitNoShoes = outfits.find(outfit => {
  return outfit.shoes === "none"
})

console.log("use find to return an outfit that has no shoes")
console.log(outfitNoShoes)

const noBoots = outfits.find(outfit => {
  return outfit.shoes === "boots"
})

console.log("use find to return an outfit that has boots")
console.log(noBoots)


const tester = outfits.find(outfit => {
  return outfit.bottoms === "jeans" & outfit.top === "t-shirt"
})

console.log(tester)

/* considering the array outfits, use map, filter and find to do the following */
//Make a copy of outfits called outfitsCopy that can be modified without changing outfits directly.
//Change a value on outfitsCopy and use console logs to show you did not change outfits
//filter outfits to give only outfits that are casual
//Make a copy (map) of outfits with the added property of accessories.  Make accessories always false.
//Make a copy (map) of outfits that contains only the properties of id, bottoms, tops and shoes
// filter outfits to give only outfits that are owned
// use find to return an outfit that has no shoes
// use find to return an outfit that has boots
//Bonus:// use find to return an outfit that has jeans and a t-shirt  

// ITERATION REVIEW & PRACTICE

const animals = [
  {
    id: 3,
    name: "Rex",
    trait: "mischievous",
    species: "dog",
    isReal: true
  },
  {
    id: 9,
    name: "Joel",
    trait: "playful",
    species: "dog",
    isReal: true
  },
  {
    id: 5,
    name: "Cleo",
    trait: "friendly",
    species: "rat",
    isReal: true
  },
  {
    id: 8,
    name: "Draco",
    trait: "grumpy",
    species: "dragon",
    isReal: false
  },
  {
    id: 2,
    name: "George",
    trait: "curious",
    species: "monkey",
    isReal: true
  },
  {
    id: 1,
    name: "Peanut",
    trait: "needy",
    species: "cat",
    isReal: true
  },
  {
    id: 1,
    name: "Lexi",
    trait: "shy",
    species: "cat",
    isReal: true
  },
  {
    id: 20,
    name: "Jacob",
    trait: "shy",
    species: "frog",
    isReal: true
  }
]

// iterate over animals and console log each animal by the following conditions:
  // if the animal is a dragon console log "I am mythical."
  // if the animal is a dog console log "I bark."
  // if the animal is a monkey or a rat console log the animals name and "I am a rat or monkey."
  // if the animal is a cat  is needy console log "I am Sydney's cat."
  // if the animal does not meet any of the above conditions console log the animals name, trait and species

  for (const animal of animals) {
    if (animal.species === "dragon") {
      console.log("I am mythical.")
    } else if (animal.species === "dog") {
      console.log("I bark.")
    } else if (animal.species === "monkey" || animal.species === "rat") {
      console.log("I am a rat or monkey.")
    } else if (animal.species === "cat") {
      console.log("I am Sydney's cat.")
    } else {
      console.log(`Animal Name: ${animal.name} Animal Trait: ${animal.trait} Animal Species: ${animal.species}`)
    }
  }

// BONUS:  Sort the array of animals by id.

animals.sort((a,b) => {return a.id - b.id})

console.log(animals)








