const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/ecohabit');

const exampleUser = {
    userName: 'example@gmail.com',
	password: 'example',
	password2: 'example',
	fullName: 'Jonathan Snow',
	firstName: 'Jon',
	lastName: 'Snow',
	date: Date.now(),
    zipCode: 12345,
    checkIn: [],
}

function ExampleCheckIn(user_id, userAnswer, totalPoints, date) {
    this.user_id = user_id;
    this.userAnswer = userAnswer;
    this.totalPoints = totalPoints;
    this.date = date;
}

function calculateScore(userID) {
    const answerOptions = [0, 1];
        // set the score to 0 to start the dao
        let score = 0;
        let answers = [];
        // answer 5 questions for the daily check-in
        for (let j = 0; j < 5; j++) {
            // choose a random index from the answer options array
            let chooseAnswer = Math.floor(Math.random() * answerOptions.length);
            let answer = answerOptions[chooseAnswer];
            // find the check-in model and push the indexed answer to the userAnswer array
            answers.push(answer);
            // user's score is compounded
            score += answer;
        }
        let checkin = new ExampleCheckIn(userID, answers, score, Date.now());
        return checkin;
}

function tenDays(newCheckin) {
    db.CheckIn.create(newCheckin);
}

db.User.create(exampleUser)
    .then(data => {
        for (i = 0; i < 10; i++) {
            tenDays(calculateScore(data._id));
        }
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });