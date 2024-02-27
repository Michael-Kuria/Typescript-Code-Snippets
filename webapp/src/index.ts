class Animal{
    constructor(public name: string, public hasLegs: boolean, public legs: number = 0){}

    write(): void {
        if(this.hasLegs){
            console.log(`${this.name} can walk and has ${this.legs} legs`);
        }else{
            console.log(`${this.name} cannot walk`);
        }
    }
}


let animals: Animal[] = [
    new Animal("elephant", true, 4),
    new Animal("snake", false),
    new Animal("Chicken", true, 2)
]


animals.forEach(animal => animal.write());