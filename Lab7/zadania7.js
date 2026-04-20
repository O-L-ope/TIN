console.log("Zadanie 1");
function Auto(rok, przebieg, cena_wyjsciowa){
    return {
        rok: rok,
        przebieg: przebieg,
        cena_wyjsciowa: cena_wyjsciowa,
        cena_koncowa: cena_wyjsciowa,

        zwiekszCene(){
            this.cena_wyjsciowa += 1000;
        },        
        zwiekszZaRokAuta(){
            const wiek = 2026 - rok;
            this.cena_koncowa -= wiek * 1000;
        },
        zwiekszZaPrzebieg(){
            const mnoznik = Math.floor(this.przebieg/100000);
            this.cena_koncowa -= mnoznik * 10000;
        },
        zmienioneWartosci(zmienionyRok, zmienionyPrzebieg){
            this.rok = zmienionyRok;
            this.przebieg = zmienionyPrzebieg;
            this.cena_koncowa = this.cena_wyjsciowa;
            this.zwiekszZaRokAuta();
            this.zwiekszZaPrzebieg();
        }
    };
};
let tablica = [];

function dopiszDoTablicy(auto){
    if (auto.cena_wyjsciowa >= 10000){tablica.push(auto);}
}

function zwiekszRokInTablica(){
    tablica.forEach(auto => {auto.rok += 1});
}

let a1 = Auto(2026, 100000, 9000);
let a2 = Auto(2026, 100000, 20000);
a1.zwiekszZaRokAuta();
a1.zwiekszZaPrzebieg();
a2.zwiekszZaRokAuta();
a2.zwiekszZaPrzebieg();
dopiszDoTablicy(a1);
dopiszDoTablicy(a2);
zwiekszRokInTablica();
console.log(tablica.map(automap => ({rok: automap.rok, przebieg: automap.przebieg, cena_wyjsciowa: automap.cena_koncowa})));


console.log("Zadanie 2");
class Ocena{
    constructor(przedmiot, wartosc){
        this.przedmiot = przedmiot;
        this.wartosc = wartosc;
    }
};

class Student{
    constructor(imie, nazwisko){
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.tablicaOcen = [];
        this.srednia = 0;
    }
    hello(){
        return `Witaj ${this.imie} ${this.nazwisko}, Twoja srednia ocen to: ${this.srednia}`;
    };

    set oceny(nowaOcena){
        if (nowaOcena instanceof Ocena){
            this.tablicaOcen.push(nowaOcena);
            let suma = 0;
            this.tablicaOcen.forEach(ocena => { suma += ocena.wartosc});
            this.srednia = suma/this.tablicaOcen.length;
        }
    }
    get oceny(){
        let komunikat = "";
        this.tablicaOcen.forEach(ocena => {komunikat += `Przedmiot: ${ocena.przedmiot} | ocena: ${ocena.wartosc} \n`});
        return komunikat.trim();
    }
}

let s1 = new Student("Jasiu", "Kowalsio");
console.log(s1.hello());

s1.oceny = new Ocena("AM", 2);
s1.oceny = new Ocena("ALG", 4);
s1.oceny = new Ocena("MAD", 3,5);
console.log(s1.hello());
console.log(s1.oceny);