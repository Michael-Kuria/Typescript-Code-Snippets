type Person = {
    id: string,
    name: string,
    city: string
};


let data: Person[] = [
    { id: "bsmith", name: "Bob Smith", city: "London"},
    { id: "ajones", name: "Alice Jones", city:"Paris"},
    { id: "dpeters", name: "Dora Peters", city: "NewYork"}
];

data.forEach(person => {
    console.log(`${person.id} ${person.name} ${person.city}`)
});

console.log(typeof(Date.now()));
