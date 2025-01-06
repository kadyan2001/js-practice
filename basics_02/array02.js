const marvel_hero = ['thor' , 'ironman' , 'marvel']

const dc_hero = ['spiderman' , 'batman', 'hanuman']

const all_hero= marvel_hero.concat(dc_hero)

console.log(all_hero);

// using spread function

const allHero = [...marvel_hero , ...dc_hero]
console.log(allHero);

const anotherArray = [1,2,3,[4,5],6,[7,8,[9,10]]]
const flatArray = anotherArray.flat(3)
console.log(flatArray);

// Data Scrapping

console.log(Array.isArray("Manish"));
console.log(Array.from("Manish"));
console.log(Array.from({name:"Manish"}));  //interesting

