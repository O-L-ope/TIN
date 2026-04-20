console.log("Zadanie 1");
function newCar(year, mileage, price){
    return {
        year: year,
        mileage: mileage,
        price: price,
        final_price: price,

        //a
        increasePrice(){
            this.price += 1000;
        },
        
        //b
        decreasePriceAge(){
            const age = 2026 - year;
            this.final_price -= age * 1000;
        },

        //c
        decreasePriceMileage(){
            const multiplier = Math.floor(this.mileage/100000);
            this.final_price -= multiplier * 10000;
        },
        
        //d
        updateValues(updatedYear, updatedMileage){
            this.year = updatedYear;
            this.mileage = updatedMileage;
            this.final_price = this.price;
            this.decreasePriceAge();
            this.decreasePriceMileage();
        }
    };
};
let array1 = [];

//e
function appendToArray(car){
    if (car.price >= 10000){
        array1.push(car);
    }
}

//f
function increaseYearInArray(){
    array1.forEach(car => {car.year += 1});
}

let car1 = newCar(2026, 100000, 9000);
let car2 = newCar(2026, 100000, 20000);
car1.decreasePriceAge();
car1.decreasePriceMileage();
car2.decreasePriceAge();
car2.decreasePriceMileage();

//test
// let car3 = newCar(2025, 500000, 50000);
// let car4 = newCar(2024, 1000000, 100000);
// car3.decreasePriceAge();
// car3.decreasePriceMileage();
// car4.decreasePriceAge();
// car4.decreasePriceMileage();

appendToArray(car1);
appendToArray(car2);
// appendToArray(car3);
// appendToArray(car4);
increaseYearInArray();

console.log(array1.map(a => ({year: a.year, mileage: a.mileage, price: a.price})));
console.log(array1.map(a => ({year: a.year, mileage: a.mileage, price: a.final_price})));


console.log("Zadanie 2");
class Ocena{
    constructor(subject, grade){
        this.subject = subject;
        this.grade = grade;
    }
};

//b
class Student{
    constructor(name, surname){
        this.name = name;
        this.surname = surname;
        this.gradesArray = [];
        this.avgGrade = 0;
    }
    
    hello(){
        return `Witaj ${this.name} ${this.surname}, twoja srednia ocen to: ${this.avgGrade}`;
    };
    
    //c
    set grades(newGrade){
        if (newGrade instanceof Ocena){
            this.gradesArray.push(newGrade);
            let sum = 0;
            this.gradesArray.forEach(grd => { sum += grd.grade});
            this.avgGrade = sum/this.gradesArray.length;
        }
    }

    //d
    get grades(){
        let message = "";
        this.gradesArray.forEach(grd => {message += `Przedmiot: ${grd.subject} - ocena: ${grd.grade} `});
        return message.trim();
    }
}

let student1 = new Student("Jan", "Kowalski");
student1.grades = new Ocena("WPR", 4);
student1.grades = new Ocena("TIN", 3);
student1.grades = new Ocena("POJ", 2);
console.log(student1.hello());
console.log(student1.grades);