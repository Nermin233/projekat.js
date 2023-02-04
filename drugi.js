var broj= 23;
console.log (typeof broj);
broj = 'Nermin';
console.log (typeof broj);

let preson = {
    name: 'Nermin',
    surname: 'Mahovkic',
    age: 24
};
console.log (preson)

let personAge = preson.age;
console.log("Age:"+ preson.age);
console.log("Prezime:"+preson.surname);
console.log("Ime:"+preson.name);


let prezime =preson ['surname'];
console.log (prezime);
