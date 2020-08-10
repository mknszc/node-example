const express = require('express');
const personRouter = express.Router();
const data = require('../model');

personRouter.get('/', function (req, res) {
    res.render('index', {
        list: data.persons
    });
})

personRouter.get('/:id(\\d+)', function (req, res) {
    let id = req.params.id;
    let currentPerson = data.persons.find(person => person.id == id);

    if (!currentPerson) return res.send('There is no such user');

    res.render('person', {
        name: currentPerson.personName(),
        surname: currentPerson.personSurname()
    });
});

module.exports = personRouter;