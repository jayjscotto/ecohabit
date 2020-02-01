const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/ecohabit');

const exampleUser = {
    userName: 'mattpignatore@gmail.com',
	password: 'elliott',
	password2: 'elliott',
	fullName: 'Matt Pignatore',
	firstName: 'Matt',
	lastName: 'Pignatore',
	date: Date.now(),
	zipCode: 08844,
	surveyResult: {
		survey: []
	}
}

function thirtyDays() {
    const pointScore = [0, 20, 40, 60, 80, 100];
    
    for (let i = 0; i < 30; i++) {
        let chooseScore = Math.floor(Math.random() * pointScore.length);
        exampleUser.surveyResult.survey.push({
            points: pointScore[chooseScore],
            date: Date.now()
        });
    }
}

thirtyDays();

db.User
    .create(exampleUser)
    .then(data => { console.log(data.results) }) 
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
