enum Feature {Waterproof, Insulated};

type Person ={ // type alias for shape type
    id: string,
    name: string,
    city: string
};

type Employee = {
    id: string, 
    company: string,
    dept: string,
}

type EmployedPerson = Person & Employee; // type intersection, will combine all the properties of both objects

function combineData(people : Person[], employees: Employee[]) : EmployedPerson []{
    const defaults = { company: "none", dept: "None"};

    return people.map(p => ({...p, ...employees.find(e => e.id === p.id) || {...defaults, id: p.id}}));

}


let people: Person[] =[
    { id: "bsmith", name: "Bob Smith", city: "London"},
    { id: "ajones", name: "Alice Jones", city:"Paris"},
    { id: "dpeters", name: "Dora Peters", city: "NewYork"}
];
let employees: Employee[] =[
    { id: "bsmith", company: "Acme Co", dept: "Sales"},
    { id: "dpeters", company: "Acme Co", dept:"Development" }
];

let combinedData: EmployedPerson [] = combineData(people, employees);

combinedData.forEach(x => console.log(`${x.id} ${x.name} ${x.company} ${x.dept} ${x.city}`));


