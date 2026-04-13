console.log("Zadanie 1");
const prostokat = (a, b) => a * b;
const trapez = (a, b, h) => ((a + b) * h) / 2;
const rownoleglobok = (a, h) => a * h;
const trojkat = (a, h) => (a * h) / 2;

function obliczPole(callback, ...wymiary) {
    const wynik = callback(...wymiary);
    return `Pole figury wynosi: ${wynik}`;
}
console.log(obliczPole(prostokat, 5, 10));
console.log(obliczPole(trapez, 5, 3, 4));
console.log(obliczPole(rownoleglobok, 6, 4));
console.log(obliczPole(trojkat, 10, 5));


console.log("Zadanie 2");
const censor = (string, word) => {
    return string.replaceAll(word, "*");
};
console.log(censor("Ala ma kota, kota i psa", "kot"));

console.log("Zadanie 3");
let tablica = ["kotlet", "kotka", "koty", "pies"];
const massCensor = (wordT) => {
    return wordT.replaceAll("kot", "*");
};
let result = tablica.map(massCensor);
console.log(result);

console.log("Zadanie 4");
let arr = [10, 11, 13, 12, 14, 15];
const mojafunkcja = (a, b) => {
    const modA = a % 3;
    const modB = b % 3;
    return modA - modB;
    // return modB - modA;
};
let sorted = arr.sort(mojafunkcja);
console.log(sorted);

console.log("Zadanie 5");
let listaPeople = [ ['Jan', 'Kowalski', 21], ['Anna', 'Nowak', 19], ['Jan', 'Trzeci', 27] ];
const funkcjaPeople = (person) => {
    return person[2] > 20;
}
let x = listaPeople.filter(funkcjaPeople);
console.log(x);
console.log(x[0], x[1], x[2]);
// console.log(x[0]);
// console.log(x[1]);
// console.log(x[2]);


console.log("Zadanie 6");
let peopleList = [ ['Jan', 'Kowalski', 21], ['Anna', 'Nowak', 19], ['Jan', 'Trzeci', 27] ];
const peopleFormatting = (osoba) => {
    return osoba.join(' | ');
};
let mapResult = peopleList.map(peopleFormatting);
// console.log(mapResult);
console.log(mapResult.join('\n'));