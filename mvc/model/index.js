let counter;
let persons = exports.persons = [];

function person(name, surname) {
    this.id         = counter ++;
    this._name       = name;
    this._surname    = surname;
}

person.prototype.personName = function () {
    return this._name;
}

person.prototype.personSurname = function () {
    return this._surname;
}

function personAdd(name, surname) {
    persons.push(new person(name, surname));
}

personAdd('Özcan', 'ÇAMOĞLU');
personAdd('TEST', 'TEST');
