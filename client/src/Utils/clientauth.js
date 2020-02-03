// function to set JWT in request header
import axios from 'axios';

export default {
    userToken: function() {
        return axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    },
    giveUserAccess: function(history) {
        return axios.get('/api/survey');
    },
    getUserData: function(id) {
        return axios.get(`/api/user/${id}`);
    },
    userRegister: function(obj) {
        return (
            axios.post('/api/auth/register', obj, function(res) {
                // changed the data being sent in request
                if (res.status === 200) {
                    console.log('success');
                }
            })
        )
    },
    userLogin: function(obj) {
        return axios.post('/api/auth/login', obj)
    },
    populateLocalStorage: function(userData) {
        localStorage.setItem('jwtToken', userData.token);
        localStorage.setItem('eco-user', JSON.stringify(userData.user));
    },

    getLocalStorage: function(key) {
        // if web token is present 
        // else ???
       return localStorage.getItem(key)
    },

    /// boolean for user daily check in
    userDailyCheck: function(userName) {
        // return axios.get('/api/user/dailycheck', obj)
    },
    // submit user daily check answers
    userSubmitDaily: function(user_id, answers) {
        const reducer = (a,b) => {
            return (a + b)
        }
        const score = answers.reduce(reducer);
            
        const checkInData = {
            user_id,
            userAnswers: answers,
            totalPoints: score,
            date: Date.now()
        }
        return axios.post('/api/survey', checkInData)
    },
}