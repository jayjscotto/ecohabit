// function to set JWT in request header
import axios from 'axios';

export default {
	userToken: function() {
		return (axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken'));
	},
	userRegister: function(obj) {
		return axios.post('/api/auth/register', obj, function(res) {
			// changed the data being sent in request
			if (res.status === 200) {
				console.log('success');
			}
		});
	},
	userLogin: function(obj) {
		return axios.post('/api/auth/login', obj);
	},
	userUpdate: function(data) {
		return axios.post(`/api/auth/update`, data);
	},
	populateLocalStorage: function(userData) {
		localStorage.setItem('jwtToken', userData.token);
		localStorage.setItem('eco-user', JSON.stringify(userData.user));
	},

	getLocalStorage: function(key) {
		return localStorage.getItem(key);
	},

	// submit user daily check answers
	userSubmitDaily: function(user_id, answers) {
		const reducer = (a, b) => {
			return a + b;
		};
		const score = answers.reduce(reducer);

		const checkInData = {
			user_id,
			userAnswers: answers,
			totalPoints: score,
			date: Date.now()
		};
		return axios.post('/api/survey', checkInData);
	},
	getCheckIn: function(id) {
		let token = this.getLocalStorage('jwtToken');
		return axios.get(`/api/survey/results/` + id, { headers: {"Authorization" : token } });
	},
	getDailyCheck: function(id) {
		let token = this.getLocalStorage('jwtToken');
		return axios.get(`/api/survey/dailycheck/` + id, { data: id, headers: {"Authorization" : token } });
	}
};
